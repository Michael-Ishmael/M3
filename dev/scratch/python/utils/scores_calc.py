import pymysql.cursors


def get_seed_questionnaires(cursor):
	sql = "select questionnaire_id from questionnaire q where q.was_seed = TRUE;"
	cursor.execute(sql)
	row = cursor.fetchone()
	all_ids = []
	while not row is None:
		all_ids.append(row["questionnaire_id"])
		row = cursor.fetchone()
	return all_ids


def calc_scores_for_questionnaire(questionnaire_id, cursor):
	sql = "select d.description, sum(a.score) as dimScore, " \
		  "d.max_score, 100 * sum(a.score) / d.max_score as pc, d.weighting, d.seed_max_score " \
		  ", 100 * sum(a.score) / d.seed_max_score as spc " \
		  "from response r " \
		  "      join answer a on r.answer_id = a.answer_id " \
		  "     join question q on r.question_id = q.question_id " \
		  "     join dimension d on q.dimension_id = d.dimension_id " \
		  "where r.questionnaire_id = %s " \
		  "group by d.dimension_id, d.description, d.max_score, d.weighting, d.seed_max_score " \
		  "order by d.dimension_id;"
	cursor.execute(sql, (questionnaire_id))

	r_score = 0
	p_score = 0
	i_score = 0
	r_weighting = 0
	p_weighting = 0
	i_weighting = 0

	row = cursor.fetchone()
	while not row is None:
		dimension = row["description"]

		if dimension == "Reporting":
			r_score = row["spc"]
			r_weighting = row["weighting"]
		elif dimension == "Planning":
			p_score = row["spc"]
			p_weighting = row["weighting"]
		elif dimension == "Impact":
			i_score = row["spc"]
			i_weighting = row["weighting"]
		row = cursor.fetchone()

	t_score = (r_score * r_weighting) + (p_score * p_weighting) + (i_score * i_weighting)
	score_obj = {"questionnaire_id": questionnaire_id, "r_score": r_score, "p_score": p_score, "i_score": i_score, "t_score": t_score}

	return score_obj

def update_questionnaire_record(scores_obj, cursor, connection):

	sql = "update questionnaire " \
		"set reporting_score = %s, " \
		"planning_score = %s, " \
		"impact_score = %s, " \
		"total_score = %s " \
		"where questionnaire_id = %s;"
	params = (scores_obj["r_score"], scores_obj["p_score"], scores_obj["i_score"], scores_obj["t_score"], scores_obj["questionnaire_id"])
	cursor.execute(sql, params )

	connection.commit()

	formatted_sql = sql.replace("%s", "{}")
	formatted_sql = formatted_sql.format(*params)
	return formatted_sql

def write_calc_scores():
	try:

		connection = pymysql.connect(host='localhost',
									 user='root',
									 password='root',
									 db='amec_m3',
									 charset='utf8mb4',
									 cursorclass=pymysql.cursors.DictCursor)

		cursor = connection.cursor()
		ids = [482]  #get_seed_questionnaires(cursor)

		result_list = []

		for questionnaire_id in ids:
			scores_obj = calc_scores_for_questionnaire(questionnaire_id, cursor)
			result_list.append(scores_obj)

		sql_script_list = []

		for scores_obj in result_list:
			script_line = update_questionnaire_record(scores_obj, cursor, connection)
			sql_script_list.append(script_line)
			print((script_line))

		a = 1

	except Exception as e:
		print(str(e))
	finally:
		connection.close()


write_calc_scores()

# 1. get list of all seed questionnaires, loop list and...
# 2. 	create result object r_score, p_score, i_score, r_weighting etc
# 3.    calculate total score by r_score * r_weighting etc and suma all three - add as t_score
# 4. 	add result object to list
# 5. loop through result list and...
# 6. 	update questionnire record with scores
