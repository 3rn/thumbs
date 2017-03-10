module.exports = function(Models) {

  Models.User.build({
    'user_name': 'Fred',
  }).save();

};
