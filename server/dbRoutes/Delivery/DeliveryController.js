var Models = require('../../db/schema.js');


var getDelivery = (req, res) => {
  console.log('DeliveryController: Getting Delivery');
  Models.connection.query(
    // `SQL Queury`
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
}


var postDelivery = (req, res) => {
  console.log('DeliveryController: Creating Delivery');
  Models.SavedQuestions.build({
    
  }).save();
};


module.exports = {
  'get': getDelivery,
  'post': postDelivery
}