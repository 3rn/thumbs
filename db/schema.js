// start the postgres server: pg_ctl -D /usr/local/var/postgres start
// run: psql postgres
// CREATE DATABASE thumbs; //CASE SENSITIVE

const Sequelize = require('sequelize');
const connection = new Sequelize('thumbs', '', '', {
  dialect: 'postgres',
  port: 5432,
  schema: 'public'
});


// V0
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

// Notes:
// createdAt & updatedAt automatically included

const define = function(model) {
    return require(`./tables/${model}/${model}Model.js`)(connection, Sequelize);
}

// V1

// Models
const User = define('User');
const Code = define('Code');
const Lecture = define('Lecture');
const Delivery = define('Delivery');
const Question = define('Question');
const QuestionType = define('QuestionType');
const MultipleChoice = define('MultipleChoice');
const Response = define('Response')


// Associations
// Source => Target
Lecture.belongsTo(User);

Code.belongsTo(User);

User.hasOne(Delivery);

Response.belongsTo(Delivery);
Response.belongsTo(Question);

Question.belongsTo(Delivery);
Question.hasMany(MultipleChoice);
Question.belongsTo(QuestionType);


module.exports = {
  connection: connection,
  SavedQuestions: SavedQuestions,
  User: User,
  Code: Code,
  Lecture: Lecture,
  Delivery: Delivery,
  Question: Question,
  QuestionType: QuestionType,
  MultipleChoice: MultipleChoice,
  Response: Response
};

connection.sync({
  // force: true
});
