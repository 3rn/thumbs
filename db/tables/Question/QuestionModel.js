module.exports = function(connection, Sequelize) {
  return connection.define('question',
  {
    'title': Sequelize.STRING(40)
    }, {
    'underscored': true
  });
}