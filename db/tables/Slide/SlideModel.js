module.exports = function(connection, Sequelize) {
  return connection.define('slide',
  {
    'link': Sequelize.TEXT
    }, {
    'underscored': true
  });
}