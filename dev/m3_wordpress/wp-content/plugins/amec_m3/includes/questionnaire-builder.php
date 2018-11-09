<?php
/*
Plugin Name: AMEC M3
Plugin URI: https://akismet.com/
Description: Used by millions, Akismet is quite possibly the best way in the world to <strong>protect your blog from spam</strong>. It keeps your site protected even while you sleep. To get started: activate the Akismet plugin and then go to your Akismet Settings page to set up your API key.
Version: 1.0
Author: Michael Ishmael
Author URI: https:66bytes.com
*/

function compose_questionnaire_data() {

	$question_dict           = get_table_as_list( "question" );
	$answer_dict             = get_table_as_list( "answer" );
	$section_list            = get_table_as_list( "section" );
	$page_list               = get_table_as_list( "page" );
	$routing_rule_list       = get_table_as_list( "routing" );
	$routing_flag_list       = get_table_as_list( "routing_flag" );
	$page_question_list      = get_table_as_list( "page_question", "OBJECT" );
	$page_routing_list       = get_table_as_list( "page_routing", "OBJECT" );
	$question_routing_list   = get_table_as_list( "question_routing", "OBJECT" );
	$routing_rule_flags_list = get_table_as_list( "routing_rule_flags", "OBJECT" );

	add_routing_flags_to_answers( $answer_dict, $routing_flag_list );
	add_routing_rules( $question_dict, $routing_rule_list, $question_routing_list, "question_id" );
	add_routing_rules( $page_list, $routing_rule_list, $page_routing_list, "page_id" );

	add_questions_to_pages( $page_list, $page_question_list );

	$routing_rules = assemble_routing_flags( $routing_rule_list, $routing_flag_list, $routing_rule_flags_list );

	$questionnaire = [
		"questions"    => dict_to_array( $question_dict, "map_question" ),
		"answers"      => dict_to_array( $answer_dict, "map_answer" ),
		"sections"     => dict_to_array( $section_list, "map_section" ),
		"pages"        => dict_to_array( $page_list, "map_page" ),
		"routingRules" => $routing_rules
	];

	return $questionnaire;
}

function save_user_response( $response ) {

	global $wpdb;

	if ( isset( $response["answerId"] ) ) {

		$answer_text      = isset( $response["answerText"] ) ? $response["answerText"] : null;
		$sql              = "CALL upsert_response(%d, %s, %d, %s );";
		$questionnaire_id = $response["questionnaireId"];
		$question_id      = $response["questionId"];
		$answer_id        = $response["answerId"];

		$sql = $wpdb->prepare( $sql, $questionnaire_id, $question_id, $answer_id, $answer_text );
		$wpdb->query( $sql );
	}

}

function delete_user_response( $response ) {

	global $wpdb;

	$sql = "DELETE FROM response WHERE questionnaire_id = %d and question_id = %s and answer_id = %d";
	$sql = $wpdb->prepare( $sql, $response["questionnaireId"], $response["questionId"], $response["answerId"] );
	$wpdb->query( $sql );

}

function compose_user_responses( $questionnaire_id ) {

	global $wpdb;

	$sql  = "SELECT  r.question_id, q.question_type_id, answer_id, answer_text FROM response r join question q on r.question_id = q.question_id WHERE questionnaire_id = %d";
	$sql  = $wpdb->prepare( $sql, $questionnaire_id );
	$list = $wpdb->get_results( $sql, "ARRAY_A" );

	return map_responses( $list );

}

function get_scores_for_questionnaire( $questionnaire_id, $benchmark_filter_id = - 1 ) {

	global $wpdb;

	$sql        = "select d.description, sum(a.score) as dimScore, d.max_score, 100 * sum(a.score) / d.max_score as pc, d.weighting from response r join answer a on r.answer_id = a.answer_id   join question q on r.question_id = q.question_id   join dimension d on q.dimension_id = d.dimension_id where r.questionnaire_id = %d group by d.description, d.max_score";
	$sql        = $wpdb->prepare( $sql, $questionnaire_id );
	$dimensions = $wpdb->get_results( $sql, "OBJECT" );

	$benchmarks = get_benchmark_scores( $benchmark_filter_id );

	$list          = [];
	$total_factors = array();
	foreach ( $dimensions as $dimension ) {
		$item                 = new stdClass();
		$item->description    = $dimension->description;
		$item->score          = (float) $dimension->pc;
		$item->benchmarkScore = get_benchmark_score_for_dimension( $benchmarks, $dimension->description );
		$total_factors[]      = $dimension->pc * $dimension->weighting;
		$list[]               = $item;
	}

	$total_score                 = new stdClass();
	$total_score->description    = "Total";
	$total_score->score          = array_sum( $total_factors );
	$total_score->benchmarkScore = get_benchmark_score_for_dimension( $benchmarks, "Total" );


	$list[] = $total_score;

	return $list;

}

function get_benchmark_score_for_dimension( $benchmarks, $dimension_desc ) {

	switch ( strtolower( $dimension_desc ) ) {
		case "reporting":
			return (float) $benchmarks->r_score;
			break;
		case "planning":
			return (float) $benchmarks->p_score;
			break;
		case "impact":
			return (float) $benchmarks->i_score;
			break;
		case "total":
			return (float) $benchmarks->t_score;
			break;
		default:
			return 0;
			break;
	}

}

function get_benchmark_scores( $answer_id_filter = - 1 ) {

	global $wpdb;

	$answer_id_filter = (int)$answer_id_filter;

	$answer_join_sql  = $answer_id_filter > - 1 ? " join response r on r.questionnaire_id = q.questionnaire_id " : "";
	$answer_where_sql = $answer_id_filter > - 1 ? " and r.answer_id = %d " : "";

	$sql = "select sum(q.reporting_score) / count(q.questionnaire_id) as r_score, sum(q.planning_score) / count(q.questionnaire_id) as p_score, sum(q.impact_score) / count(q.questionnaire_id) as i_score, sum(q.total_score) / count(q.questionnaire_id) as t_score
			from questionnaire q
  				" . $answer_join_sql . "
			where q.completed = TRUE " . $answer_where_sql . ";";

	if ( $answer_id_filter > - 1 ) {
		$sql = $wpdb->prepare( $sql, $answer_id_filter );
	}

	$benchmark_scores = $wpdb->get_results( $sql, "OBJECT" );

	return $benchmark_scores[0];

}

function get_benchmark_categories() {

	global $wpdb;

	$sql        = "select sub.category_id, sub.category_desc, max(sub.item_response_count) as max_response_count
					from (
					select q.category_id, c.category_desc, a.answer_id, count(r.response_id) as item_response_count
					from question q
					       join category c on q.category_id = c.category_id
					       join answer a on q.question_id = a.question_id
					       left join response r on q.question_id = r.question_id and a.answer_id = r.answer_id
					group by q.category_id, a.answer_id) sub
					group by sub.category_id, sub.category_desc
					order by sub.category_id, sub.category_desc
					;";
	$categories = $wpdb->get_results( $sql, "OBJECT" );


	$sql     = "select q.category_id, a.answer_id, a.answer_text, count(r.response_id) as response_count
			from question q
			       join category c on q.category_id = c.category_id
			       join answer a on q.question_id = a.question_id
			       left join response r on q.question_id = r.question_id and a.answer_id = r.answer_id
			group by q.category_id, a.answer_text, a.answer_id
			order by q.category_id, a.answer_id ;";
	$filters = $wpdb->get_results( $sql, "OBJECT" );

	return [ "filterCategories" => array_map("map_filter_category", $categories), "filters" =>  array_map( "map_filter",  $filters )];

}

function set_scores_for_questionnaire( $questionnaire_id ) {

	$scores = get_scores_for_questionnaire( $questionnaire_id );

	$r_score = 0;
	$p_score = 0;
	$i_score = 0;
	$t_score = 0;

	foreach ( $scores as $item ) {
		$dimension = $item->description;

		if ( $dimension == "Reporting" ) {
			$r_score = $item->score;
		} elseif ( $dimension == "Planning" ) {
			$p_score = $item->score;
		} elseif ( $dimension == "Impact" ) {
			$i_score = $item->score;
		} elseif ( $dimension == "Total" ) {
			$t_score = $item->score;
		}
	}

	global $wpdb;

	$sql = "update questionnaire set completed = TRUE, reporting_score = %d, planning_score = %d, impact_score = %d, total_score = %d where questionnaire_id = %d;";
	$sql = $wpdb->prepare( $sql, $r_score, $p_score, $i_score, $t_score, $questionnaire_id );
	$wpdb->query( $sql );

	return $scores;
}


function get_recommendations_for_questionnaire( $questionnaire_id ) {


	$recommendations              = array();
	$recommendations["strengths"] = map_recommendation( "STRENGTH", $questionnaire_id );
	$recommendations["actions"]   = map_recommendation( "ACTION", $questionnaire_id );

	return $recommendations;


}

function map_recommendation( $type, $questionnaire_id ) {

	global $wpdb;

	$sql  = get_recommendation_sql( $type );
	$sql  = $wpdb->prepare( $sql, $questionnaire_id );
	$list = $wpdb->get_results( $sql, "OBJECT" );

	$strength_map = array();

	foreach ( $list as $db_strength ) {
		if ( ! isset( $strength_map[ $db_strength->dimension ] ) ) {
			$strength_map[ $db_strength->dimension ] = array();
		}

		$strength_map[ $db_strength->dimension ][] = array(
			"text"  => $db_strength->r_text,
			"order" => $db_strength->r_order
		);
	}

	$strength_arr = array();
	foreach ( $strength_map as $key => $value ) {
		$strength_arr[] = array( "label" => $key, "items" => $value );
	}

	return $strength_arr;
}

function get_recommendation_sql( $type ) {

	$sql = <<<EOT
		select d.description as dimension, q.strength_text as r_text, q.strength_order as r_order
		from response r
		  join question q on r.question_id = q.question_id
		  join answer a on a.answer_id = r.answer_id
		  join section s on q.section_id = s.section_id
		  join dimension d on q.dimension_id = d.dimension_id
		where r.questionnaire_id = %d and  not score is null and score >= strength_threshold and not strength_text is null
		order by d.dimension_id, q.strength_order
EOT;

	if ( $type == 'ACTION' ) {
		$sql = str_replace( "strength_text", "action_text", $sql );
		$sql = str_replace( "strength_order", "action_order", $sql );
		$sql = str_replace( "score >= strength_threshold", "score <= action_threshold", $sql );
	}

	return $sql;

}

function get_questionnaires_for_user( $user_id ) {

	$sql = <<<EOT
		SELECT q.questionnaire_id, q.description, q.timestamp, sum(case when r.answer_id is null then 0 else 1 end) / %d as percentage_complete
		FROM questionnaire q
		  left join response r on r.questionnaire_id = q.questionnaire_id
		WHERE q.user_id = %d and q.hidden = FALSE 
		group by q.questionnaire_id, q.description, q.timestamp;
EOT;

	global $wpdb;

	$sql  = $wpdb->prepare( $sql, 66, $user_id );
	$list = $wpdb->get_results( $sql, "OBJECT" );

	return array_map( "map_questionnaire", $list );

}

function create_questionnaire_for_user( $user_id, $description ) {

	global $wpdb;

	$table  = 'questionnaire';
	$data   = array( 'user_id' => $user_id, 'description' => $description );
	$format = array( '%d', '%s' );
	$wpdb->insert( $table, $data, $format );
	$questionnaire_id = $wpdb->insert_id;

	return array(
		"questionnaireId" => $questionnaire_id,
		"description"     => $description,
	);

}

function hide_questionnaire( $questionnaire_id ) {
	// Only hide so we can restore

	global $wpdb;

	$sql = "UPDATE questionnaire SET hidden = TRUE WHERE questionnaire_id = %d";
	$sql = $wpdb->prepare( $sql, $questionnaire_id );
	$wpdb->query( $sql );

	return array(
		"questionnaireId" => $questionnaire_id,
		"hidden"          => true,
	);
}


function rename_questionnaire( $questionnaire_id, $description ) {

	global $wpdb;

	$sql = "UPDATE questionnaire SET description = %s WHERE questionnaire_id = %d";
	$sql = $wpdb->prepare( $sql, $description, $questionnaire_id );
	$wpdb->query( $sql );

	return array(
		"questionnaireId" => $questionnaire_id,
		"description"     => $description,
	);

}

function dict_to_array( $dict, $map_func ) {
	$dict     = array_map( $map_func, $dict );
	$arr_list = [];
	foreach ( $dict as $key => $value ) {
		$arr_list[] = $value;
	}

	return $arr_list;
}

function add_routing_rules( $parent_list, $routing_list, $mapping_list, $mapping_field ) {

	foreach ( $mapping_list as $value ) {
		try {
			$item = $parent_list[ $value->$mapping_field ];
			if ( $item ) {
				$routing_rule = $routing_list[ $value->routing_rule_id ];
				if ( $routing_rule ) {
					$item->routing_rule_keys[] = $routing_rule->routing_rule_key;
				}
			}
		} catch ( Exception $e ) {
			printf( $e->getMessage() );
		}
	}
}

function add_routing_flags_to_answers( $answer_list, $flag_list ) {

	foreach ( $answer_list as $answer ) {

		try {
			if ( $answer->routing_flag_id ) {
				$flag = $flag_list[ $answer->routing_flag_id ];
				if ( $flag ) {
					$flag_val                      = new stdClass();
					$flag_val->key                 = $flag->routing_flag_key;
					$flag_val->value               = $flag->routing_flag_value;
					$answer->set_routing_condition = $flag_val;
				}
			}

		} catch ( Exception $e ) {
			printf( $e->getMessage() );
		}

	}

}

function add_questions_to_pages( $page_list, $mapping_list ) {

	foreach ( $mapping_list as $value ) {
		try {
			$page = $page_list[ $value->page_id ];
			if ( $page ) {
				$page->question_ids[] = $value->question_id;
			}
		} catch ( Exception $e ) {
			printf( $e->getMessage() );
		}
	}
}

function assemble_routing_flags( $rule_list, $flag_list, $mapping_list ) {

	foreach ( $mapping_list as $value ) {
		try {
			$rule = $rule_list[ $value->routing_rule_id ];
			$flag = $flag_list[ $value->routing_flag_id ];
			if ( $rule && $flag ) {
				$flag_val        = new stdClass();
				$flag_val->key   = $flag->routing_flag_key;
				$flag_val->value = $flag->routing_flag_value;
				$rule->flags[]   = $flag_val;
			}
		} catch ( Exception $e ) {
			printf( $e->getMessage() );
		}
	}

	$routing_rules = new stdClass();

	foreach ( $rule_list as $rule ) {
		try {
			$prop_name                 = $rule->routing_rule_key;
			$routing_rules->$prop_name = map_routing_rule( $rule );
		} catch ( Exception $e ) {
			printf( $e->getMessage() );
		}
	}

	return $routing_rules;
}

function get_table_as_list( $set_name, $output = "OBJECT_K" ) {
	global $wpdb;
	$query = get_m3_query( $set_name );
	$list  = $wpdb->get_results( $query, $output );

	return $list;
}

function get_m3_query( $set_name ) {

	switch ( $set_name ) {
		case "question":
			return "SELECT question_id, section_id, question_text, q.question_type_id, qt.description, qt.instruction_text, dimension_id, max_score, t.question_template_key from question q inner join question_type qt on q.question_type_id = qt.question_type_id left join question_template t on q.question_template_id = t.question_template_id";
		case "answer":
			return "SELECT answer_id, section_id, question_id, answer_text, score, routing_flag_id from answer";
		case "section":
			return "SELECT section_id, section_name, section_text from section";
		case "page":
			return "SELECT page_id, page_index, pt.page_template_name, section_id, p.page_text from page p join page_template pt on p.page_template_id = pt.page_template_id";
		case "routing":
			return "SELECT routing_rule_id, routing_rule_key, t.routing_rule_type_key, true_val, false_val from routing_rule r join routing_rule_type t on r.routing_rule_type_id = t.routing_rule_type_id";
		case "routing_flag":
			return "SELECT routing_flag_id, routing_flag_key, routing_flag_value from routing_flag";
		case "routing_rule_flags":
			return "SELECT routing_rule_id, routing_flag_id from routing_rule_flags";
		case "page_question":
			return "SELECT page_id, question_id from page_question";
		case "page_routing":
			return "SELECT page_id, routing_rule_id from page_routing_rule";
		case "question_routing":
			return "SELECT question_id, routing_rule_id from question_routing_rule";
		default:
			return null;
	}
}

function map_questionnaire( $db_questionnaire ) {

	$j_questionnaire                     = new stdClass();
	$j_questionnaire->questionnaireId    = (int) $db_questionnaire->questionnaire_id;
	$j_questionnaire->description        = $db_questionnaire->description;
	$j_questionnaire->timestamp          = rest_get_date_with_gmt( $db_questionnaire->timestamp, false )[1];
	$j_questionnaire->percentageComplete = (float) $db_questionnaire->percentage_complete;

	return $j_questionnaire;
}

function map_question( $db_question ) {
	$j_question                 = new stdClass();
	$j_question->questionId     = $db_question->question_id;
	$j_question->sectionId      = (int) $db_question->section_id;
	$j_question->text           = $db_question->question_text;
	$j_question->questionTypeId = (int) $db_question->question_type_id;
	if ( isset( $db_question->question_template_key ) ) {
		$j_question->template = $db_question->question_template_key;
	}
	if ( isset( $db_question->routing_rule_keys ) ) {
		$j_question->routingRuleKeys = $db_question->routing_rule_keys;
	}

	return $j_question;
}

function map_answer( $db_answer ) {
	$j_answer             = new stdClass();
	$j_answer->answerId   = (int) $db_answer->answer_id;
	$j_answer->questionId = $db_answer->question_id;
	$j_answer->text       = $db_answer->answer_text;
	$j_answer->score      = (float) $db_answer->score;
	if ( isset( $db_answer->set_routing_condition ) ) {
		$j_answer->setRoutingCondition = $db_answer->set_routing_condition;
	}

	return $j_answer;
}

function map_section( $db_section ) {
	$j_section              = new stdClass();
	$j_section->sectionId   = (int) $db_section->section_id;
	$j_section->sectionName = $db_section->section_name;
	$j_section->sectionText = $db_section->section_text;

	return $j_section;
}

function map_page( $db_page ) {
	$j_page            = new stdClass();
	$j_page->index     = (int) $db_page->page_index;
	$j_page->template  = $db_page->page_template_name;
	$j_page->sectionId = (int) $db_page->section_id;
	if ( isset( $db_page->page_text ) ) {
		$j_page->text = $db_page->page_text;
	}
	if ( isset( $db_page->question_ids ) ) {
		$j_page->questionIds = $db_page->question_ids;
	}
	if ( isset( $db_page->routing_rule_keys ) ) {
		$j_page->routingRuleKeys = $db_page->routing_rule_keys;
	}

	return $j_page;
}

function map_routing_rule( $db_rule ) {
	$j_rule        = new stdClass();
	$j_rule->type  = $db_rule->routing_rule_type_key;
	$j_rule->flags = $db_rule->flags;
	if ( isset( $db_rule->true_val ) ) {
		$j_rule->trueVal  = $db_rule->true_val;
		$j_rule->falseVal = $db_rule->false_val;
	}

	return $j_rule;
}

function map_responses( $db_responses ) {

	$j_responses = array();

	foreach ( $db_responses as $db_response ) {

		try {

			$question_id = $db_response["question_id"];

			if ( isset( $j_responses[ $question_id ] ) ) {
				$j_responses[ $question_id ]["answerIds"][] = (int) ( $db_response["answer_id"] );
			} else {
				$j_responses[ $question_id ]                   = array();
				$j_responses[ $question_id ]["questionId"]     = $question_id;
				$j_responses[ $question_id ]["questionTypeId"] = (int) $db_response["question_type_id"];
				$j_responses[ $question_id ]["answerIds"][]    = (int) $db_response["answer_id"];
				if ( isset( $db_response["answer_text"] ) && ! empty( $db_response["answer_text"] ) ) {
					$j_responses[ $question_id ]["responseText"] = $db_response["answer_text"];
				}
			}

		} catch ( Exception $e ) {
			printf( $e->getMessage() );
		}

	}

	return $j_responses;
}

function map_filter_category( $db_category ) {
	$j_category        = new stdClass();
	$j_category->categoryId  = (int)$db_category->category_id;
	$j_category->description  = $db_category->category_desc;
	$j_category->maxResponseCount  = (int)$db_category->max_response_count;
	return $j_category;
}

function map_filter( $db_filter) {
	$j_filter        = new stdClass();
	$j_filter->categoryId  = (int)$db_filter->category_id;
	$j_filter->filterId  =(int) $db_filter->answer_id;
	$j_filter->description  = $db_filter->answer_text;
	$j_filter->responseCount  = (int)$db_filter->response_count;
	return $j_filter;
}