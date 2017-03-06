var Models = require('../../schema.js');
var SavedQuestions = require('./models/savedQuestions.js');

module.exports.init = function() {
  SavedQuestions.init();
};