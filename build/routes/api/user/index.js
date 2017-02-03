'use strict';

var router = require('express').Router();
var controller = require('./user.controller');

router.get('/list', controller.list);
router.post('/assign-admin/:username', controller.assignAdmin);

module.exports = router;