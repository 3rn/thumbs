module.exports = (connection, Sequelize) =>
  connection.define('user',
    {
      user_name: Sequelize.STRING,
    }, {
      underscored: true,
    },
  );
