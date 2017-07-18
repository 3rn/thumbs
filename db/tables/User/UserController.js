const Models = require('../../schema.js');

const getUser = (req, res) => {
  console.log('UserController: Getting user');
  Models.connection.query(
    // `SQL Queury`
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const postUser = () => {
  console.log('UserController: Creating user');
  Models.User.build({
  }).save();
};

module.exports = {
  get: getUser,
  post: postUser,
};
