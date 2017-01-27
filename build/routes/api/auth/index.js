'use strict';

var router = require('express').Router();
var controller = require('./auth.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/check', controller.check);

module.exports = router;