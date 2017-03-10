module.exports = function(Models) {

  Models.Lecture.build({
    'title': 'First Lecture',
    'description': 'The greatest first lecture ever',
    'user_id': 1
  }).save();

};
