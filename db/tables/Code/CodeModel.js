module.exports = (connection, Sequelize) =>
  connection.define('code',
    {
      code: Sequelize.CHAR(4),
    }, {
      underscored: true,
    },
  );
