module.exports = (Models) => {
  Models.Slide.build({
    link: 'ASDF',
    lecture_id: 1,
  }).save();
};
