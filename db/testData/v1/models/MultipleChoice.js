module.exports = function(Models) {

  Models.MultipleChoice.build({
    'option_text': JSON.stringify(['First Answer', 'Second Answer', 'Third Answer', 'Fourth Answer']),
    'question_id': 3
  }).save();

};
