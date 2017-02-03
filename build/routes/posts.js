'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _auth = require('./api/auth');

var _auth2 = _interopRequireDefault(_auth);

var _user = require('./api/user');

var _user2 = _interopRequireDefault(_user);

var _auth3 = require('../../middlewares/auth');

var _auth4 = _interopRequireDefault(_auth3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/dd', function (req, res) {
	console.log('@#$%^%$#@!@#$basic router');
	res.send('posts!!!');
});

router.use('/auth', _auth2.default);
router.use('/user', _auth4.default);
router.use('/user', _user2.default);

router.get('*', function (req, res) {
	console.log('req.path', req.path);
	res.sendFile(_path2.default.resolve(__dirname, './../../public/index.html'));
});

exports.default = router;