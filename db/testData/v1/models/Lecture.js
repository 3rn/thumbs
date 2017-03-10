module.exports = function(Models) {

  Models.Lecture.build({
    'title': 'Mechanical Keyboards',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'How to become a kpop star',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'The cool things I worked with and why they shouldn\'t have let me',
    'user_id': 1
  }).save();

  Models.Lecture.build({
    'title': 'How to be a better person',
    'user_id': 1
  }).save();
};
