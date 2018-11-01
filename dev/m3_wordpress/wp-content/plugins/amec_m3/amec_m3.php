<?php
/*
Plugin Name: AMEC M3
Plugin URI: https://akismet.com/
Description: Used by millions, Akismet is quite possibly the best way in the world to <strong>protect your blog from spam</strong>. It keeps your site protected even while you sleep. To get started: activate the Akismet plugin and then go to your Akismet Settings page to set up your API key.
Version: 1.0
Author: Michael Ishmael
Author URI: https:66bytes.com
*/

// Make sure we don't expose any info if called directly
if ( ! function_exists( 'add_action' ) ) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}

require_once( plugin_dir_path( __FILE__ ) . 'includes/questionnaire-builder.php' );



//region  REST API - CUSTOM END POINTS
add_action( 'rest_api_init', function () {
	register_rest_route( 'm3/v1', '/questionnaire', array(
		'methods'  => 'GET',
		'callback' => 'handle_get_questionnaire'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );

	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)/questions/(?P<questionId>.+)/responses/(?P<answerId>[\d]+)', array(
		'methods'  => 'PUT',
		'callback' => 'save_questionnaire_response'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );


	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)/questions/(?P<questionId>.+)/responses/(?P<answerId>[\d]+)', array(
		'methods'  => 'DELETE',
		'callback' => 'delete_questionnaire_response'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );

	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)/responses', array(
		'methods'  => 'GET',
		'callback' => 'get_user_responses'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );

	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)/scores', array(
		'methods'  => 'GET',
		'callback' => 'get_scores'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );

	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)/recommendations', array(
		'methods'  => 'GET',
		'callback' => 'get_recommendations'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );

	register_rest_route( 'm3/v1', '/questionnaires', array(
		'methods'  => 'GET',
		'callback' => 'get_questionnaires'
		/*,
			'permission_callback' => function () {
				return current_user_can( 'edit_others_posts' );
			}*/
	) );

	register_rest_route( 'm3/v1', '/questionnaires', array(
		'methods'  => 'POST',
		'callback' => 'create_questionnaire'
	) );

	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)', array(
		'methods'  => 'PUT',
		'callback' => 'update_questionnaire'
	) );

	register_rest_route( 'm3/v1', '/questionnaires/(?P<questionnaireId>[\d]+)', array(
		'methods'  => 'DELETE',
		'callback' => 'delete_questionnaire'
	) );

} );


function handle_get_questionnaire( $data ) {
	return compose_questionnaire_data();
}

function save_questionnaire_response( $request ) {

	$response = $request->get_params();
	save_user_response( $response );

	return new WP_REST_Response( "OK", 200 );

}

function delete_questionnaire_response( $request ) {

	$response = $request->get_params();
	delete_user_response( $response );

	return new WP_REST_Response( "OK", 200 );

}

function get_user_responses( $request ) {

	//$user_id = $_GET["userId"];
	$params = $request->get_params();

	if ( isset( $params["questionnaireId"] ) ) {
		$questionnaire_id = $params["questionnaireId"];
	}

	if ( isset( $questionnaire_id ) ) {
		$data = compose_user_responses( $questionnaire_id );
	} else {
		$data = [];
	}

	return new WP_REST_Response( $data, 200 );
}

function get_scores( $request ) {

	$params = $request->get_params();

	if ( isset( $params["questionnaireId"] ) ) {
		$questionnaire_id = $params["questionnaireId"];
	}

	if ( isset( $questionnaire_id ) ) {
		$data = get_scores_for_questionnaire( $questionnaire_id );
	} else {
		$data = [];
	}

	return new WP_REST_Response( $data, 200 );

}

function get_recommendations( $request ) {

	$params = $request->get_params();

	if ( isset( $params["questionnaireId"] ) ) {
		$questionnaire_id = $params["questionnaireId"];
	}

	if ( isset( $questionnaire_id ) ) {
		$data = get_recommendations_for_questionnaire( $questionnaire_id );
	} else {
		$data = [];
	}

	return new WP_REST_Response( $data, 200 );

}
//endregion


function m3_disable_admin_bar() {
	if ( ! current_user_can( 'administrator' ) ) {
		add_filter( 'show_admin_bar', '__return_false' );
		add_action( 'admin_print_scripts-profile.php', 'aif_hide_admin_bar_settings' );
	}
}

function get_questionnaires( $request ) {

	$user = wp_get_current_user();

	if (! $user->exists())
		return new WP_REST_Response( sprintf("User not authorised"), 403);;


	$params = $request->get_params();

	if ( isset( $params["userId"] ) ) {
		$user_id = $params["userId"];
		if($user_id != $user->ID)
			return new WP_REST_Response( sprintf("User: %d is not authorised", $user_id), 403);
	}


	if ( isset( $user ) ) {
		$data = get_questionnaires_for_user( $user->ID );
	} else {
		$data = [];
	}

	return new WP_REST_Response( $data, 200 );

}

function create_questionnaire( $request){

	$user = wp_get_current_user();
	if (! $user->exists())
		return new WP_REST_Response( sprintf("User not authorised"), 403);;

	$params = $request->get_params();

	if ( isset( $params["userId"] ) ) {
		$user_id = $params["userId"];
		if($user_id != $user->ID)
			return new WP_REST_Response( sprintf("User: %d is not authorised", $user_id), 403);
	}


	if ( isset( $params["description"] ) ) {
		$description = $params["description"];
	}	else {
		return new WP_REST_Response( "description is a required field", 400);
	}

	if ( isset( $user ) && isset($description)  ) {
		$data = create_questionnaire_for_user( $user->ID, $description );
	} else {
		return new WP_REST_Response( "Unknown error", 500);
	}

	return new WP_REST_Response( $data, 200 );

}

function update_questionnaire ( $request ){

	$params = $request->get_params();

	if ( isset( $params["description"] ) ) {
		$description = $params["description"];
	}	else {
		return new WP_REST_Response( "description is a required field", 400);
	}

	if ( isset( $params["questionnaireId"] ) ) {
		$questionnaire_id = $params["questionnaireId"];
	}	else {
		return new WP_REST_Response( "questionnaireId is a required field", 400);
	}

	if ( isset( $questionnaire_id ) && isset($description) ) {
		$data = rename_questionnaire( $questionnaire_id, $description );
	} else {
		return new WP_REST_Response( "Unknown error", 500);
	}

	return new WP_REST_Response( $data, 200 );

}


function delete_questionnaire ( $request ){

	$params = $request->get_params();


	if ( isset( $params["questionnaireId"] ) ) {
		$questionnaire_id = $params["questionnaireId"];
	}	else {
		return new WP_REST_Response( "questionnaireId is a required field", 400);
	}

	if ( isset( $questionnaire_id ) ) {
		$data = hide_questionnaire( $questionnaire_id );
	} else {
		return new WP_REST_Response( "Unknown error", 500);
	}

	return new WP_REST_Response( "SUCCESS", 200 );

}


add_action( 'init', 'm3_disable_admin_bar', 9 );
//add_action( 'init', 'm3_set_user_questionnaire', 10 );