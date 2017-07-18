module.exports = (connection, Sequelize) =>
  connection.define('lecture',
    {
      title: Sequelize.STRING(),
      slide_url: Sequelize.STRING(255),
      description: Sequelize.TEXT,
    }, {
      underscored: true,
    });
