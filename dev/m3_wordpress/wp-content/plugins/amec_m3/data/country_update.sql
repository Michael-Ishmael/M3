delete from answer
where answer_id = 2309;

insert into answer(answer_id, section_id, question_id, answer_text)
select 2300 + country_id, 1, '1g', country_name
from country;

UPDATE question
set question_type_id = 1
where question_id = '1g';

update question_template
set question_template_key = "AUTO_COMPLETE"
where question_template_id = 7;