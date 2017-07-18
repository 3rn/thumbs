module.exports = (connection, Sequelize) =>
  connection.define('response',
    {
      value: Sequelize.TEXT,
    }, {
      underscored: true,
    });
