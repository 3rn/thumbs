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

// Notes:
// createdAt & updatedAt automatically included


var User = connection.define('user',
  {
    'user_name': Sequelize.STRING
  }, {
    'underscored': true
  }
);

var ReservedCode = connection.define('reserved_code',
  {
    'code': Sequelize.CHAR(4)
  }, {
    'underscored': true
  }
);

var Lecture = connection.define('lecture',
  {
    'title': Sequelize.STRING(40),
    'description': Sequelize.TEXT
    }, {
    'underscored': true
  }
);

var Delivery = connection.define('delivery',
  {
    'notes': Sequelize.TEXT
    }, {
    'underscored': true
  }
);

var Question = connection.define('question',
  {
    'title': Sequelize.STRING(40)
    }, {
    'underscored': true
  }
);

var QuestionType = connection.define('question_type',
  {
    'name': Sequelize.STRING(20),
    'graph_type': Sequelize.STRING(20)
    }, {
    'underscored': true
  }
);

var MultipleChoice = connection.define('multiple_choice',
  {
    'option_text': Sequelize.STRING(20)
    }, {
    'underscored': true
  }
);

var Response = connection.define('response',
  {
    'value': Sequelize.TEXT
    }, {
    'underscored': true
  }
);


// Associations
// Source => Target
Lecture.belongsTo(User);

ReservedCode.belongsTo(User);

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
  ReservedCode: ReservedCode,
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
