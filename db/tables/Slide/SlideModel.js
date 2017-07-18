module.exports = (connection, Sequelize) =>
  connection.define('slide',
    {
      link: Sequelize.TEXT,
    }, {
      underscored: true,
    },
  );
