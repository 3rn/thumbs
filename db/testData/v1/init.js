const Models = require('../../schema.js');


// Models
const init = function(model) {
  require(`./models/${model}.js`)(Models);
};


module.exports.init = function() {

  init('User');
  init('Code');
  init('Lecture');
  init('Delivery');
  init('QuestionType');
  init('Question');
  init('MultipleChoice');
  init('Response');
  init('Slide');

}
