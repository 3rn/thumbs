module.exports = function(Models) {

  Models.Slide.build({
    'link': 'ASDF',
    'lecture_id': 1
  }).save();

  Models.Slide.build({
    'link': 'RANT',
    'lecture_id': 1
  }).save();

  Models.Slide.build({
    'link': 'NATH',
    'lecture_id': 1
  }).save();

  Models.Slide.build({
    'link': 'RICH',
    'lecture_id': 2
  }).save();

  Models.Slide.build({
    'link': 'RYAN',
    'lecture_id': 2
  }).save();

};