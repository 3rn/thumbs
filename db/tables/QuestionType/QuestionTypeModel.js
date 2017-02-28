module.exports = function(connection, Sequelize) {
  return connection.define('question_type',
  {
    'name': Sequelize.STRING(20),
    'graph_type': Sequelize.STRING(20)
    }, {
    'underscored': true
  });
}