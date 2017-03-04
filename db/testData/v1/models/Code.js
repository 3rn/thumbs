module.exports = function(Models) {
  Models.Code.build({
    'code': 'FRED',
    'user_id': 1
  }).save();

  Models.Code.build({
    'code': 'RYAN',
    'user_id': 1
  }).save();

  Models.Code.build({
    'code': 'RANT',
    'user_id': 1
  }).save();

  Models.Code.build({
    'code': 'RICH',
    'user_id': 1
  }).save();

  Models.Code.build({
    'code': 'NATH',
    'user_id': 1
  }).save();
};