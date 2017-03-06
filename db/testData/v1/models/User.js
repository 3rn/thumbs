module.exports = function(Models) {
  Models.User.build({
    'user_name': 'Fred',
  }).save();

  Models.User.build({
    'user_name': 'ntoung',
  }).save();

  Models.User.build({
    'user_name': 'rwhuber',
  }).save();

  Models.User.build({
    'user_name': 'ryanmgray',
  }).save();

  Models.User.build({
    'user_name': 'rdubs',
  }).save();
};