'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var router = require('express').Router();
var controller = require('./auth.controller');

router.post('/register', controller.register);

exports.default = router;