'use strict';

var jwt = require('jsonwebtoken');
var User = require('../../../../models/user');

/*
	POST /api/auth/register
	{
		username,
		password
	}
*/

exports.register = function (req, res) {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;

    var newUser = null;

    // create a new user if does not exist
    var create = function create(user) {
        console.log('create2 -ing');
        if (user) {
            throw new Error('username exists');
        } else {
            console.log('username1 : ', username);
            console.log('password1 : ', password);
            return User.create(username, password);
        }
    };

    // count the number of the user
    var count = function count(user) {
        console.log('count -ing');
        newUser = user;
        return User.count({}).exec();
    };

    // assign admin if count is 1
    var assign = function assign(count) {
        console.log('assign -ing');
        if (count === 1) {
            return newUser.assignAdmin();
        } else {
            // if not, return a promise that returns false
            return Promise.resolve(false);
        }
    };

    // respond to the client
    var respond = function respond(isAdmin) {
        console.log('respond -ing');
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        });
    };

    // run when there is an error (username exists)
    var onError = function onError(error) {
        console.log('onError -ing');
        res.status(409).json({
            message: error.message
        });
    };

    // check username duplication
    User.findOneByUsername(username).then(create).then(count).then(assign).then(respond).catch(onError);
};

/*
	POST /api/auth/login

	{
		username,
		password
	}
*/

exports.login = function (req, res) {
    var _req$body2 = req.body,
        username = _req$body2.username,
        password = _req$body2.password;

    var secret = req.app.get('jwt-secret');
    console.log('req.body : ', req.body); // req.body :  { username: 'ingi12122222dd212', password: '123123123' }
    console.log('{username} : ', { username: username }); // {username} :  { username: 'ingi12122222dd212' }
    console.log('username : ', username); // username :  ingi12122222dd212

    // check the user info & generate the jwt
    // check the user info & generate the jwt
    var check = function check(user) {
        if (!user) {
            // user does not exist
            throw new Error('login failed');
        } else {
            // user exists, check the password
            console.log('user : ', user);
            if (user.verify(password)) {
                // create a promise that generates jwt asynchronously
                var p = new Promise(function (resolve, reject) {
                    jwt.sign({
                        _id: user._id,
                        username: user.username,
                        admin: user.admin
                    }, secret, {
                        expiresIn: '7d',
                        issuer: 'velopert.com',
                        subject: 'userInfo'
                    }, function (err, token) {
                        if (err) reject(err);
                        resolve(token);
                    });
                });
                return p;
            } else {
                throw new Error('login failed');
            }
        }
    };

    // respond the token 
    var respond = function respond(token) {
        console.log('respond function token : ', token);
        res.json({
            message: 'logged in successfully',
            token: token
        });
    };

    // error occured
    var onError = function onError(error) {
        res.status(403).json({
            message: error.message
        });
    };

    // find the user
    User.findOneByUsername(username).then(check).then(respond).catch(onError);
};

/*
	GET /api/auth/check
*/

exports.check = function (req, res) {
    // read the token from header or url 
    var token = req.headers['x-access-token'] || req.query.token;

    // token does not exist
    if (!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        });
    }

    // create a promise that decodes the token
    var p = new Promise(function (resolve, reject) {
        jwt.verify(token, req.app.get('jwt-secret'), function (err, decoded) {
            if (err) reject(err);
            resolve(decoded);
        });
    });

    // if token is valid, it will respond with its info
    var respond = function respond(token) {
        res.json({
            success: true,
            info: token
        });
    };

    // if it has failed to verify, it will return an error message
    var onError = function onError(error) {
        res.status(403).json({
            success: false,
            message: error.message
        });
    };

    // process the promise
    p.then(respond).catch(onError);
};

/*
	GET  	/api/auth/check
*/

exports.check = function (req, res) {
    res.json({
        success: true,
        info: req.decoded
    });
};