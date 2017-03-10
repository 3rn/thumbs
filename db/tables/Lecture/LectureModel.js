module.exports = function(connection, Sequelize) {
  return connection.define('lecture',
    {
      'title': Sequelize.STRING(40),
      'slide_url': Sequelize.STRING(255),
      'description': Sequelize.TEXT
    }, {
      'underscored': true
    });
};