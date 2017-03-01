module.exports = function(connection, Sequelize) {
  return connection.define('multiple_choice',
  {
    'option_text': Sequelize.STRING(20)
    }, {
    'underscored': true
  });
}