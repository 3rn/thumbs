module.exports = function(connection, Sequelize) {
  return connection.define('delivery',
  {
    'notes': Sequelize.TEXT,
    'room': Sequelize.CHAR(4)
    }, {
    'underscored': true
  });
}
