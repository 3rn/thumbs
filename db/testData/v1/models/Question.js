module.exports = function(Models) {
  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'lecture_id': 1,
    'question_type_id': 1
  }).save();

  Models.Question.build({
    'title': 'Why is Ryan such a bad person?',
    'lecture_id': 2,
    'question_type_id': 3
  }).save();

  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'lecture_id': 3,
    'question_type_id': 3
  }).save();

  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'lecture_id': 4,
    'question_type_id': 3
  }).save();

  Models.Question.build({
    'title': 'Why is Nathan such a good person?',
    'lecture_id': 5,
    'question_type_id': 2
  }).save();
};