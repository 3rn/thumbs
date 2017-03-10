const Models = require('../../schema.js');

const init = function(model) {
  require(`./models/${model}.js`)(Models);
};

module.exports.init = function() {
  init('User');
  init('Code');
  init('Lecture');
  init('Delivery');
  init('Question');
  init('Response');
  init('Slide');
};
