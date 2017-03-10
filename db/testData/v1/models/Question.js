module.exports = function(Models) {
  Models.Question.build({
    'title': 'YN',
    'lecture_id': 1,
    'question_type': 'YES_NO'
  }).save();

  Models.Question.build({
    'title': 'Thumbs',
    'lecture_id': 1,
    'question_type': 'THUMBS'
  }).save();

  Models.Question.build({
    'title': 'Mult Choice',
    'lecture_id': 1,
    'question_type': 'MULTIPLE_CHOICE'
  }).save();

  Models.Question.build({
    'title': 'Scale',
    'lecture_id': 1,
    'question_type': 'SCALE'
  }).save();
};
