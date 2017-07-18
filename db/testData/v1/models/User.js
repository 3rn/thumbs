module.exports = (Models) => {
  Models.User.build({
    user_name: 'Fred',
  }).save();
};
