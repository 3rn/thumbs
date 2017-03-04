module.exports = function(Models) {
  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 1
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 1
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 3
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 4
  }).save();

  Models.Delivery.build({
    'notes': 'This was the best delivery ever.',
    'user_id': 5
  }).save();
};