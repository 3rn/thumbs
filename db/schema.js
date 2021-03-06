// start the postgres server: pg_ctl -D /usr/local/var/postgres start
// run: psql postgres
// CREATE DATABASE thumbs; //CASE SENSITIVE

const Sequelize = require('sequelize');

if (process.env.PRODUCTION === 'production') {
  const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'thumbsdb.crmuzms0yo69.us-west-1.rds.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    schema: 'public',
  });
} else {
  // for localhost developement, use:
  const connection = new Sequelize('thumbs', '', '', {
    dialect: 'postgres',
    port: 5432,
    schema: 'public',
  });
}

// V0
const SavedQuestions = connection.define('saved_questions',
  {
    'presentation_code': Sequelize.STRING,
    'title': Sequelize.STRING,
    'question_type': Sequelize.STRING,
    'graph_type': Sequelize.STRING,
    'choices': Sequelize.ARRAY(Sequelize.STRING)
  }, {
    'underscored': true
  }
);

// Notes:
// createdAt & updatedAt automatically included
const define = model => require(`./tables/${model}/${model}Model.js`)(connection, Sequelize);

// V1

// Models
const User = define('User');
const Code = define('Code');
const Lecture = define('Lecture');
const Slide = define('Slide');
const Delivery = define('Delivery');
const Question = define('Question');
const Response = define('Response');


// Source => Target
Lecture.belongsTo(User);

Code.belongsTo(User);

User.hasOne(Delivery);
Lecture.hasMany(Delivery);

Slide.belongsTo(Lecture);

Response.belongsTo(Delivery);
Response.belongsTo(Question);

Question.belongsTo(Lecture);


module.exports = {
  connection: connection,
  SavedQuestions: SavedQuestions,
  User: User,
  Code: Code,
  Lecture: Lecture,
  Slide: Slide,
  Delivery: Delivery,
  Question: Question,
  Response: Response
};

connection.sync({
  // force: true
});
