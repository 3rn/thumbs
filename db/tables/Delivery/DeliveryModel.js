module.exports = (connection, Sequelize) =>
  connection.define('delivery',
    {
      notes: Sequelize.TEXT,
      room: Sequelize.CHAR(4),
    }, {
      underscored: true,
    });
