module.exports = function(connection, Sequelize) {
  return connection.define('response',
  {
    'value': Sequelize.TEXT
    }, {
    'underscored': true
  });
}