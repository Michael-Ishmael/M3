from openpyxl import load_workbook
import json
import os

wb = load_workbook('/Users/scorpio/Documents/Dev/Work/Amec/M3/M3 data set Sep 2018.xlsx', read_only=True)

lcaseFirst = lambda s: s[:1].lower() + s[1:] if s else ''


def extract_sheet(sheet_name):
	ws = wb[sheet_name]
	r = 0
	items = []
	field_arr = []
	for row in ws.rows:
		if r == 0:
			c = 0
			for cell in row:
				if cell.value is None:
					break
				field_arr.append(cell.value)
				c = c + 1
		elif row[1].value is None:
			continue
		else:
			q_dict = {}
			for c in range(len(field_arr)):
				q_dict[lcaseFirst(field_arr[c])] = row[c].value
				c = c + 1
			# if parent_dict is not None and link_field is not None and child_field is not None:
			# 	parent_obj = parent_dict[q_dict[link_field]]
			# 	if parent_obj is not None:
			# 		if child_field not in parent_obj:
			# 			parent_obj[child_field] = []
			# 		parent_obj[child_field].append(q_dict)
			# items[q_dict[key_field]] = q_dict
			items.append(q_dict)
		r = r + 1
	return items


sections = extract_sheet('Section')  # 'SectionID')
questions = extract_sheet('Question')  # , 'QuestionID')  # , sections, 'SectionID', 'questions')
answers = extract_sheet('Answer')  # , 'AnswerID')  # , questions, 'QuestionID', 'answers')

data = {
	"userId": 123,
	"sections": sections,
	"questions": questions,
	"answers": answers,
	"responses": []
}

j_file = open('question_data.json', 'w')
j_file.write(json.dumps(data, indent=4))
j_file.close()
