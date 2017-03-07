module.exports = function(Models) {
  Models.Lecture.build({
    'title': 'How to be a better person',
    'description': 'The greatest lecture ever',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'Birds',
    'description': 'The greatest lecture ever',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'Mechanical Keyboards',
    'description': 'The greatest lecture ever',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'How to fly for free',
    'description': 'The greatest lecture ever',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'How to Use Docker',
    'description': 'The greatest lecture ever',
    'user_id': 1
  }).save();
};