var Models = require('../../schema.js');


var getUser = (req, res) => {
  console.log('UserController: Getting user');
  Models.connection.query(
    // `SQL Queury`
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}


var postUser = (req, res) => {
  console.log('UserController: Creating user');
  Models.User.build({
    
  }).save();
};


module.exports = {
  get: getUser,
  post: postUser
}