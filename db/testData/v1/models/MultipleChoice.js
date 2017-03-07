module.exports = function(Models) {
  Models.MultipleChoice.build({
    'option_text': 'multiple option 1',
    'question_id': 2
  }).save();

  Models.MultipleChoice.build({
    'option_text': 'multiple option 2',
    'question_id': 2
  }).save();

  Models.MultipleChoice.build({
    'option_text': 'multiple option 3',
    'question_id': 3
  }).save();

  Models.MultipleChoice.build({
    'option_text': 'multiple option 4',
    'question_id': 4
  }).save();

  Models.MultipleChoice.build({
    'option_text': 'multiple option 5',
    'question_id': 4
  }).save();
};