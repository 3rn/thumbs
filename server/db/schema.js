// start the postgres server: pg_ctl -D /usr/local/var/postgres start
// run: psql postgres
// CREATE DATABASE thumbs; //CASE SENSITIVE

const Sequelize = require('sequelize');
const connection = new Sequelize('thumbs', '', '', {
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

// Notes:
// createdAt & updatedAt automatically included


// var User = connection.define('user',
//   {
//     'user_name': Sequelize.STRING
//   }, {
//     'underscored': true
//   }
// );


var define = function(model) {
    return require(`../dbRoutes/${model}/${model}Model.js`)(connection, Sequelize);
}

let models = {
  'User': define('User')

}






//var User = require('../dbRoutes/User/UserModel.js')(connection, Sequelize);

var Code = require('../dbRoutes/Code/CodeModel.js')(connection, Sequelize);

var Lecture = require('../dbRoutes/Lecture/LectureModel.js')(connection, Sequelize);

var Delivery = require('../dbRoutes/Delivery/DeliveryModel.js')(connection, Sequelize);

var Question = require('../dbRoutes/Question/QuestionModel.js')(connection, Sequelize);

var QuestionType = require('../dbRoutes/QuestionType/QuestionTypeModel.js')(connection, Sequelize);

var MultipleChoice = require('../dbRoutes/MultipleChoice/MultipleChoiceModel.js')(connection, Sequelize);

var Response = require('../dbRoutes/Response/ResponseModel.js')(connection, Sequelize);


// Associations
// Source => Target
Lecture.belongsTo(models.User);

// Code.belongsTo(User);

// User.hasOne(Delivery);

// Response.belongsTo(Delivery);
// Response.belongsTo(Question);

// Question.belongsTo(Delivery);
// Question.hasMany(MultipleChoice);
// Question.belongsTo(QuestionType);


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
  force: true
});
