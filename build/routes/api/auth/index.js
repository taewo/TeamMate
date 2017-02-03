'use strict';

var router = require('express').Router();
var controller = require('./auth.controller');
var authMiddleware = require('../../../../middlewares/auth');

router.post('/register', controller.register);
router.post('/login', controller.login);

router.use('/check', authMiddleware);
router.get('/check', controller.check);

module.exports = router;