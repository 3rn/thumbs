var Models = require('./schema.js');

Models.SavedQuestions.build({
  presentationCode: 'ABCD',
  title: 'Docker Thumbs Check',
  questionType: 'thumbs',
  graphType: 'hist'
}).save();

Models.SavedQuestions.build({
  presentationCode: 'ABCD',
  title: 'Docker Thumbs Check',
  questionType: 'mult',
  graphType: 'pie'
}).save();

Models.SavedQuestions.build({
  presentationCode: 'ABCD',
  title: 'Docker Thumbs Check',
  questionType: 'scale',
  graphType: 'hist'
}).save();


Models.MultChoiceOptions.build({
  option: 'One',
  SavedQuestionId: 2
}).save();

Models.MultChoiceOptions.build({
  option: 'Two',
  SavedQuestionId: 2
}).save();

Models.MultChoiceOptions.build({
  option: 'Three',
  SavedQuestionId: 2
}).save();

Models.MultChoiceOptions.build({
  option: 'Four',
  SavedQuestionId: 2
}).save();
