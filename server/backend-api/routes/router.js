module.exports = function(app) {
  var apiControllers = require('../controllers/controllers');

  app.route('/api/chat')
    .get(apiControllers.getMsg)
    .post(apiControllers.postMsg);

  app.route('/api/push/')
    .get(apiControllers.getData)
    .post(apiControllers.pushData);

  app.route('/api/push/:data')
    .get(apiControllers.getData)
    .post(apiControllers.pushData);
};

