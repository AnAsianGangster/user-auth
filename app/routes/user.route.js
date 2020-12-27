const controller = require('../controllers/user.controller');
const verifySignUp = require('../middleware/verifySignUp.middleware');

module.exports = function (router) {
    router.post(
        '/signup',
        [verifySignUp.checkDuplicateUsername, verifySignUp.checkDuplicateEmail],
        controller.signup
    );

    router.post('/signin', controller.signin);
};
