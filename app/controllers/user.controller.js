const db = require('../models/index.model');
const bcrypt = require('bcryptjs');

const User = db.user;
const Op = db.Sequelize.Op;

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        profilePicUrl: req.body.profilePicUrl,
    })
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        },
    })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                });
            }

            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (!passwordIsValid) {
                return res.status(401).send({
                    message: 'Invalid password',
                });
            }

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                profilePicUrl: user.profilePicUrl,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};
