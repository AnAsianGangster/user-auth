const controller = require('../controllers/user.controller');

module.exports = function (router) {
    router.post('/signup', controller.signup);

    router.post('/signin', controller.signin);
};
