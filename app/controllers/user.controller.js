const db = require('../models/index.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

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
                    accessToken: null,
                    message: 'Invalid password',
                });
            }

            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400, // 24 hours
            });

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                profilePicUrl: user.profilePicUrl,
                accessToken: token,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            });
        });
};
