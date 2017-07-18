module.exports = (Models) => {
  Models.Code.build({
    code: 'FRED',
    user_id: 1,
  }).save();
};
