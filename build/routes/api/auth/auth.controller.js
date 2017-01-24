'use strict';

var _user = require('../../../../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	//	create a new user if does not exist
	var create = function create(user) {
		if (user) {
			throw new Error('username exists');
		} else {
			return _user2.default.create(username, password);
		}
	};

	//	count the number of the user
	var count = function count(user) {
		newUser = user;
		return _user2.default.count({}).exec();
	};

	//	assign admin if count is 1
	var assign = function assign(count) {
		if (count === 1) {
			return newUser.assignAdmin();
		} else {
			//	if not, return a promise that returns false
			return Promise.resolve(false);
		}
	};

	//	respond to the client
	var respond = function respond(isAdmin) {
		res.json({
			message: 'registered successfully',
			admin: isAdmin ? true : false
		});
	};

	// run when there is an error (username exists)
	var onError = function onError(error) {
		res.status(409).json({
			message: error.message
		});
	};

	//	check username duplication
	_user2.default.findOneByUsername(username).then(create).then(count).then(assign).then(respond).catch(onError);
};