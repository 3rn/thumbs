var Models = require('./schema.js');

Models.SavedQuestions.build({
  'presentation_code': 'ABCD',
  'title': 'Docker Thumbs Check',
  'question_type': 'thumbs',
  'graph_type': 'hist',
  'content': null
}).save();

Models.SavedQuestions.build({
  'presentation_code': 'ABCD',
  'title': 'Favorite Flavor of Ice Cream?',
  'question_type': 'mult',
  'graph_type': 'pie',
  'content': ['Vanilla', 'Chocolate', 'Strawberry', 'Mint Chocolate Chip']
}).save();

Models.SavedQuestions.build({
  'presentation_code': 'ABCD',
  'title': 'How happy are you?',
  'question_type': 'scale',
  'graph_type': 'hist',
  'content': null
}).save();

Models.SavedQuestions.build({
  'presentation_code': 'RICH',
  'title': 'Do you think Ryan will wear a hat today?',
  'question_type': 'yes-no',
  'graph_type': 'hist',
  'content': null
}).save();

Models.SavedQuestions.build({
  'presentation_code': 'RANT',
  'title': 'Would you rather fight 100 duck-sized horses or one horse-sized duck?',
  'question_type': 'mult',
  'graph_type': 'pie',
  'content': ['100 duck-sized horses', 'one horse-sized duck']
}).save();


Models.SavedQuestions.build({
  'presentation_code': 'RYAN',
  'title': 'How good of a person is Nathan?',
  'question_type': 'scale',
  'graph_type': 'hist',
  'content': null
}).save();

Models.SavedQuestions.build({
  'presentation_code': 'NATH',
  'title': 'Where\'s Ranit right now?',
  'question_type': 'thumbs',
  'graph_type': 'open-resp',
  'content': null
}).save();
