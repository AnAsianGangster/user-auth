const router = require('express').Router();

module.exports = (app) => {
    require('./user.route')(router);

    app.use('/auth', router);
};
