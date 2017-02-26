// start the postgres server: pg_ctl -D /usr/local/var/postgres start
// run: psql postgres
// CREATE DATABASE thumbs; //CASE SENSITIVE

var Sequelize = require('sequelize');
var connection = new Sequelize('thumbs', '', '', {
  dialect: 'postgres',
  port: 5432,
  schema: 'public'
});

var SavedQuestions = connection.define('saved_questions',
  {
    'presentation_code': Sequelize.STRING,
    'title': Sequelize.STRING,
    'question_type': Sequelize.STRING,
    'graph_type': Sequelize.STRING,
    'content': Sequelize.ARRAY(Sequelize.STRING)
  }, {
    'underscored': true
  }
);

module.exports = {
  connection: connection,
  SavedQuestions: SavedQuestions
};

connection.sync();
