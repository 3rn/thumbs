module.exports = function(connection, Sequelize) {
  return connection.define('lecture',
    {
      'title': Sequelize.STRING(40),
      'slide_url': Sequelize.STRING(40),
      'description': Sequelize.TEXT
    }, {
      'underscored': true
    });
};