module.exports = function(Models) {
  Models.Delivery.build({
    'notes': 'This is the first delivery ever.',
    'user_id': 1,
    'lecture_id': 1
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 1,
    'lecture_id': 1
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 3,
    'lecture_id': 1
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 4,
    'lecture_id': 1
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 5,
    'lecture_id': 1
  }).save();
};
