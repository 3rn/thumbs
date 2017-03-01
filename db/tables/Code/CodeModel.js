module.exports = function(connection, Sequelize) {
  return connection.define('code',
    {
      'code': Sequelize.CHAR(4)
    }, {
      'underscored': true
    }
  );
}