var Models = require('../../schema.js');

var getNewSlideLink = (req, res) => {
  console.log('Slide Controller: getting new slide link');
  Models.connection.query(
    `SELECT * FROM slides
     WHERE link = ${req.params.slideLink}
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var getSlide = (req, res) => {
  console.log('Slide Controller: getting slide');
  Models.connection.query(
    `SELECT * FROM slides
     WHERE link = '${req.params.slideLink}'
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postSlideLink = (req, res) => {
  console.log('Slide Controller: posting slide');
  Models.Slide.build({
    'link': req.params.slideLink,
    'lecture_id': req.body.lectureId
  }).save().then(function() {
    res.end();
  });
};

var deleteSlideLink = (req, res) => {
  console.log('Slide Controller: deleting slide link');
  Models.connection.query(
    `DELETE * FROM slides
     WHERE link = '${req.params.slideLink}'
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  getSlide: getSlide,
  postSlideLink: postSlideLink,
  deleteSlideLink: deleteSlideLink
};
