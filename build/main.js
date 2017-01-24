'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
	load this config
*/
var config = require('../config');

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// print the request log on console
app.set((0, _morgan2.default)('dev'));

// set the secret key variable for jwt
app.set('jwt-secret', config.secret);

app.use('/', _express2.default.static(__dirname + '/../public'));

app.use('/', _posts2.default);

app.use('/api', _posts2.default);

var server = app.listen(port, function () {
	console.log('Express listening on port', port);
});

/*
	connect to mongodb server
*/
_mongoose2.default.connect(config.mongodbUri);
var db = _mongoose2.default.connection;
db.on('error', console.error);
db.once('open', function () {
	console.log('connected to mongodb server');
});