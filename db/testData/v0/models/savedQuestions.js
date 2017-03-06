module.exports.init = function(){
  Models.SavedQuestions.build({
    'presentation_code': 'ABCD',
    'title': 'Docker Thumbs Check',
    'question_type': 'THUMBS',
    'graph_type': 'hist',
    'choices': null
  }).save();

  Models.SavedQuestions.build({
    'presentation_code': 'ABCD',
    'title': 'Favorite Flavor of Ice Cream?',
    'question_type': 'MULTIPLE_CHOICE',
    'graph_type': 'pie',
    'choices': ['Vanilla', 'Chocolate', 'Strawberry', 'Mint Chocolate Chip']
  }).save();

  Models.SavedQuestions.build({
    'presentation_code': 'ABCD',
    'title': 'How happy are you?',
    'question_type': 'SCALE',
    'graph_type': 'hist',
    'choices': null
  }).save();

  Models.SavedQuestions.build({
    'presentation_code': 'ABCD',
    'title': 'Do you think Ryan will wear a hat today?',
    'question_type': 'YES_NO',
    'graph_type': 'hist',
    'choices': null
  }).save();

  Models.SavedQuestions.build({
    'presentation_code': 'ABCD',
    'title': 'Comments?',
    'question_type': 'OPEN_RESPONSE',
    'graph_type': 'pie',
    'choices': null
  }).save();


  Models.SavedQuestions.build({
    'presentation_code': 'RANT',
    'title': 'Would you rather fight 100 duck-sized horses or one horse-sized duck?',
    'question_type': 'MULTIPLE_CHOICE',
    'graph_type': 'pie',
    'choices': ['100 duck-sized horses', 'one horse-sized duck']
  }).save();


  Models.SavedQuestions.build({
    'presentation_code': 'RYAN',
    'title': 'How good of a person is Nathan?',
    'question_type': 'SCALE',
    'graph_type': 'hist',
    'choices': null
  }).save();

  Models.SavedQuestions.build({
    'presentation_code': 'NATH',
    'title': 'Where\'s Ranit right now?',
    'question_type': 'THUMBS',
    'graph_type': 'open-resp',
    'choices': null
  }).save();

  Models.SavedQuestions.build({
    'presentation_code': 'NATH',
    'title': 'Where\'s Ranit right now?',
    'question_type': 'THUMBS',
    'graph_type': 'open-resp',
    'choices': null
  }).save();
}