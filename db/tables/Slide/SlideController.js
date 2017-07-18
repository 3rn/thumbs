const Models = require('../../schema.js');

const getNewSlideLink = (req, res) => {
  console.log('Slide Controller: getting new slide link');
  Models.connection.query(
    `SELECT * FROM slides
     WHERE link = ${req.params.slideLink}
    `,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const getSlide = (req, res) => {
  console.log('Slide Controller: getting slide');
  Models.connection.query(
    `SELECT * FROM slides
     WHERE link = '${req.params.slideLink}'
    `,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

const postSlideLink = (req, res) => {
  console.log('Slide Controller: posting slide');
  Models.Slide.build({
    link: req.params.slideLink,
    lecture_id: req.body.lectureId,
  }).save().then(() => {
    res.end();
  });
};

const deleteSlideLink = (req, res) => {
  console.log('Slide Controller: deleting slide link');
  Models.connection.query(
    `DELETE * FROM slides
     WHERE link = '${req.params.slideLink}'
    `,
    { type: Models.connection.QueryTypes.SELECT },
  ).then((data) => {
    res.send(data);
  });
};

module.exports = {
  getSlide: getSlide,
  postSlideLink: postSlideLink,
  deleteSlideLink: deleteSlideLink,
};
