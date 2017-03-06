var Models = require('../../schema.js');

var getNewSlideLink = (req, res) => {
  console.log('Slide Controller: getting new slide link');

  Models.connection.query(
    `SELECT * FROM slide
     WHERE slide.id = ${req.params.slideId}
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}

var getSlide = (req, res) => {
  console.log('Slide Controller: getting slide');
  Models.connection.query(
    `SELECT * FROM slide
     WHERE slide.id = '${req.params.slideId}'
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

var postSlideLink = (req, res) => {
  console.log('Slide Controller: posting slide');
  Models.Slide.build({

  }).save();
};

var deleteSlideLink = (req, res) => {
  console.log('Slide Controller: deleting slide link');
  Models.connection.query(
    `DELETE * FROM slide
     WHERE id = '${req.params.slideId}'
    `,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
};

module.exports = {
  get: getSlide,
  post: postSlideLink,
  delete: deleteSlideLink
};
