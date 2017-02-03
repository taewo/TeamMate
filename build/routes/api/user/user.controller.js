'use strict';

var User = require('../../../../models/user');

/* 
    GET /api/user/list
*/

exports.list = function (req, res) {
    // refuse if not an admin
    if (!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        });
    }

    User.find({}).then(function (users) {
        res.json({ users: users });
    });
};

/*
    POST /api/user/assign-admin/:username
*/

exports.assignAdmin = function (req, res) {
    // refuse if not an admin
    if (!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        });
    }

    User.findOneByUsername(req.params.username).then(function (user) {
        return user.assignAdmin;
    }).then(res.json({
        success: true
    }));
};