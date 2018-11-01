from openpyxl import load_workbook
import json
import os

wb = load_workbook('/Users/scorpio/Documents/Dev/Work/Amec/M3/M3 data set Sep 2018.xlsx', read_only=True)

lcaseFirst = lambda s: s[:1].lower() + s[1:] if s else ''


def create_questionnaires(sheet_name):
	lookup = create_answer_lookup("Answer")
	ws = wb[sheet_name]
	r = 0
	questionnaires = {}
	field_arr = []
	questionnaire_id = "xx"

	for c in range(2, 62):
		r = 0
		for row in ws.rows:
			answer_id = None
			answer_text = None
			if r == 0:
				questionnaire_id = row[c].value
				questionnaires[questionnaire_id] = []
			elif r > 79:
				break
			elif r > 1:
				if 10 <= r < 22:
					question_id = '1f'
					answer_key = row[1].value
					use_answer = row[c].value == "Yes"
				else:
					question_id = row[1].value
					answer_key = row[c].value
					use_answer = not bool(not answer_key or answer_key.isspace())

				if question_id == '1g':
					answer_id = 2309
					answer_text = answer_key
				elif use_answer:
					if question_id in lookup and answer_key in lookup[question_id]:
						answer_id = lookup[question_id][answer_key]

				if answer_id is not None:
					response = {"questionnaire_id": questionnaire_id, "question_id": question_id,  "answer_id": answer_id }
					if answer_text:
						response["answer_text"] = answer_text
					questionnaires[questionnaire_id].append(response)

			r = r + 1

	return questionnaires


def write_questionnaire_responses_to_file():

	questionnaires = create_questionnaires("Sheet2")
	path = "/Users/scorpio/Documents/Dev/Work/Amec/M3/dev/scratch/python/utils/all_responses.sql"
	f = open(path, "w")

	for key in questionnaires:
		responses = questionnaires[key]
		f.write("# Questionnaire {0} #\r\n\r\n".format(key))
		for response in responses:
			answer_text_str = "'{0}'".format(response["answer_text"]) if "answer_text" in response else "NULL"
			sql = "INSERT INTO response (questionnaire_id, question_id, answer_id, answer_text) " \
				  "VALUES ({0}, '{1}', {2}, {3});\r\n"\
				.format(response["questionnaire_id"], response["question_id"], response["answer_id"], answer_text_str)
			f.write(sql)
		f.write("\r\n\r\n")

	f.close()


def create_answer_lookup(sheet_name):
	ws = wb[sheet_name]
	r = 0
	questions = {}
	field_arr = []
	for row in ws.rows:
		if r < 2:
			r = r + 1
			continue
		elif r > 447:
			break
		elif row[0].value is None:
			continue
		else:
			question_id = row[2].value
			answer_id = row[0].value
			answer_key = row[3].value

			if question_id not in questions:
				questions[question_id] = {}
				last_question_id = question_id

			questions[question_id][answer_key] = answer_id

		r = r + 1
	return questions


write_questionnaire_responses_to_file()


def extract_users(sheet_name):
	ws = wb[sheet_name]
	r = 0
	users = []
	id_row = list(ws.rows)[0]
	date_row = list(ws.rows)[1]
	for c in range(61):
		user_id = id_row[c + 2].value
		q_date = date_row[c + 2].value
		create_user(user_id, q_date)
	# users.append({"id": user_id, "qDate": q_date})

	return users


def create_user(id, date_str):
	user_email = 'user{0}@66bytes.com'.format(id)
	password = 'C0ka-Co1a_zero_41'
	user_nice = 'User {0} - {1}'.format(id, date_str)

	user_args = [id, user_email, password, user_nice, user_email, '', date_str, '', '0', user_nice, ]
	user_meta_args_1 = [id, 'wp_capabilities', 'a:1:{s:11:"contributor";b:1;}']
	user_meta_args_2 = [id, 'wp_user_level', '1']
	q_name = 'Seed Questionnaire {0}'.format(id)
	q_args = [id, id, q_name, date_str]

	sql1 = get_insert_user_sql(user_args)
	sql2 = get_insert_user_meta_sql(user_meta_args_1)
	sql3 = get_insert_user_meta_sql(user_meta_args_2)
	sql4 = get_insert_questionnaire_sql(q_args)

	sql = "{0}\r\n{1}\r\n{2}\r\n{3}\r\n\r\n".format(sql1, sql2, sql3, sql4)

	print(sql)


def get_insert_user_sql(user_args):
	return "INSERT INTO wp_users (ID, user_login, user_pass, user_nicename, user_email, user_url, user_registered, user_activation_key, user_status, display_name) " \
		   "VALUES ({0}, '{1}', MD5('{2}'), '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}');".format(*user_args)


def get_insert_user_meta_sql(meta_args):
	return "INSERT INTO wp_usermeta (user_id, meta_key, meta_value) " \
		   "VALUES ({0}, '{1}', '{2}');".format(*meta_args)


def get_insert_questionnaire_sql(q_args):
	return "INSERT INTO questionnaire (questionnaire_id, user_id, description, timestamp) " \
		   "VALUES ({0}, {1}, '{2}', '{3}');".format(*q_args)

# create_user(34, '2018-05-09 16:58:19')


# users = extract_users('Sheet2')  # 'SectionID')
# questions = extract_sheet('Question')  # , 'QuestionID')  # , sections, 'SectionID', 'questions')

# answers = extract_sheet('Answer')  # , 'AnswerID')  # , questions, 'QuestionID', 'answers')
#
# data = {
# 	"userId": 123,
# 	"sections": sections,
# 	"questions": questions,
# 	"answers": answers,
# 	"responses": []
# }
#
# j_file = open('question_data.json', 'w')
# j_file.write(json.dumps(data, indent=4))
# j_file.close()
