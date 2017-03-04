module.exports = function(Models) {

  Models.QuestionType.build({
    'name': 'yes_no',
    'graph_type': 'pie_chart'
  }).save();

  Models.QuestionType.build({
    'name': 'thumbs',
    'graph_type': 'bar_chart'
  }).save();

  Models.QuestionType.build({
    'name': 'multiple_choice',
    'graph_type': 'bar_chart'
  }).save();

  Models.QuestionType.build({
    'name': 'scale',
    'graph_type': 'open_response'
  }).save();

  Models.QuestionType.build({
    'name': 'open_response',
    'graph_type': 'scale'
  }).save();

};