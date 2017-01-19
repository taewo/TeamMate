'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/dd', function (req, res) {
	console.log('@#$%^%$#@!@#$basic router');
	res.send('posts!!!');
});

// router.get('/test1', (req, res) => {
// 	res.send('fuck!');
// })

// router.get('/read/:id', (req, res) => {
// 	res.send('You are reading post ' + req.params.id);
// });

router.get('*', function (req, res) {
	res.sendFile(_path2.default.resolve(__dirname, './../../public/index.html'));
});

exports.default = router;