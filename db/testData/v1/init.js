const Models = require('../../schema.js');

const init = model => require(`./models/${model}.js`)(Models);

module.exports.init = () => {
  init('User');
  init('Code');
  init('Lecture');
  init('Delivery');
  init('Question');
  init('Response');
  init('Slide');
};
