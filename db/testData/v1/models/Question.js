module.exports = function(Models) {
  Models.Question.build({
    'title': 'How to be a better person',
    'questions_delivery_id_fkey': 1,
    'questions_question_type_id_fkey': 1
  }).save();

  Models.Question.build({
    'title': 'Birds',
    'questions_delivery_id_fkey': 2,
    'questions_question_type_id_fkey': 3
  }).save();

  Models.Question.build({
    'title': 'Mechanical Keyboards',
    'questions_delivery_id_fkey': 3,
    'questions_question_type_id_fkey': 3
  }).save();

  Models.Question.build({
    'title': 'How to fly for free',
    'questions_delivery_id_fkey': 4,
    'questions_question_type_id_fkey': 3
  }).save();

  Models.Question.build({
    'title': 'How to Use Docker',
    'questions_delivery_id_fkey': 5,
    'questions_question_type_id_fkey': 2
  }).save();
};