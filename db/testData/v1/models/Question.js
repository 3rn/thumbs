module.exports = function(Models) {
  Models.Question.build({
    'title': 'YN',
    'lecture_id': 1,
    'question_type_id': 1
  }).save();

  Models.Question.build({
    'title': 'Thumbs',
    'lecture_id': 1,
    'question_type_id': 2
  }).save();

  Models.Question.build({
    'title': 'Mult Choice',
    'lecture_id': 1,
    'question_type_id': 3
  }).save();

  Models.Question.build({
    'title': 'Scale',
    'lecture_id': 1,
    'question_type_id': 4
  }).save();

};
