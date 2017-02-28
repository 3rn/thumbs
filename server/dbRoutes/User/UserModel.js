module.exports = function(connection, Sequelize) {
  return connection.define('user',
  {
    'user_name': Sequelize.STRING
  }, {
    'underscored': true
  });
}