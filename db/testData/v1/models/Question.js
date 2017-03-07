module.exports = function(Models) {
  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'questions_delivery_id_fkey': 1,
    'questions_question_type_id_fkey': 1
  }).save();

  Models.Question.build({
    'title': 'Why is Ryan such a bad person?',
    'questions_delivery_id_fkey': 2,
    'questions_question_type_id_fkey': 3
  }).save();

  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'questions_delivery_id_fkey': 3,
    'questions_question_type_id_fkey': 3
  }).save();

  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'questions_delivery_id_fkey': 4,
    'questions_question_type_id_fkey': 3
  }).save();

  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'questions_delivery_id_fkey': 5,
    'questions_question_type_id_fkey': 2
  }).save();
};