var Sequelize = require('sequelize');
var connection = new Sequelize('thumbs', '', '', {
  dialect: 'postgres',
  port: 5432,
  schema: 'public'
});


var SavedQuestions = connection.define('SavedQuestions', {
  presentationCode: Sequelize.STRING,
  title: Sequelize.STRING,
  questionType: Sequelize.STRING,
  graphType: Sequelize.STRING
});

var MultChoiceOptions = connection.define('MultChoiceOptions', {
  option: Sequelize.STRING
});

MultChoiceOptions.belongsTo(SavedQuestions);

module.exports = {
  connection: connection,
  SavedQuestions: SavedQuestions,
  MultChoiceOptions: MultChoiceOptions
};

connection.sync();
