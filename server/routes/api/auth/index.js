const router = require('express').Router();
const controller = require('./auth.controller');

router.post('/register', controller.register);

export default router;