module.exports = function(connection, Sequelize) {
  return connection.define('delivery',
  {
    'notes': Sequelize.TEXT
    }, {
    'underscored': true
  });
}