module.exports = function(Models) {
  Models.Question.build({
    'title': 'YN',
    'lecture_id': 1,
    'question_type': 'YES_NO',
    'question_choices': []
  }).save();

  Models.Question.build({
    'title': 'Thumbs',
    'lecture_id': 1,
    'question_type': 'THUMBS',
    'question_choices': []
  }).save();

  Models.Question.build({
    'title': 'Mult Choice',
    'lecture_id': 1,
    'question_type': 'MULTIPLE_CHOICE',
    'question_choices': ['First Answer', 'Second Answer', 'Third Answer', 'Fourth Answer']
  }).save();

  Models.Question.build({
    'title': 'Scale',
    'lecture_id': 1,
    'question_type': 'SCALE',
    'question_choices': []
  }).save();
};
