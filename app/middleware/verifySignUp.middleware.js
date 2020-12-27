const db = require('../models/index.model');

const User = db.user;

checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username,
        },
    }).then((user) => {
        if (user) {
            res.status(400).send({
                message: `Failed, username: ${req.body.username} is already in use`,
            });
        } else {
            next();
        }
    });
};

checkDuplicateEmail = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((user) => {
        if (user) {
            res.status(400).semd({
                message: `Failed, email: ${req.body.email} is already in use`,
            });
        } else {
            next();
        }
    });
};

const verifySignUp = {
    checkDuplicateUsername: checkDuplicateUsername,
    checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;
