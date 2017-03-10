module.exports = function(connection, Sequelize) {
  return connection.define('question',
    {
      'title': Sequelize.STRING(40),
      'question_type': Sequelize.STRING(40),
      'question_choices': Sequelize.ARRAY(Sequelize.STRING())
    }, {
      'underscored': true
    });
};
