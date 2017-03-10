module.exports = function(Models) {

  Models.Response.build({
    'value': JSON.stringify([7, 14, 33]),
    'delivery_id': 1,
    'question_id': 1
  }).save();

  Models.Response.build({
    'value': JSON.stringify([9, 13]),
    'delivery_id': 1,
    'question_id': 2
  }).save();

  Models.Response.build({
    'value': JSON.stringify([17, 24, 56, 11]),
    'delivery_id': 1,
    'question_id': 3
  }).save();

  Models.Response.build({
    'value': JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    'delivery_id': 1,
    'question_id': 4
  }).save();

};
