const Models = require('../../schema.js');
const SavedQuestions = require('./models/savedQuestions.js');

module.exports.init = () => {
  SavedQuestions.init();
};
