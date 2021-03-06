'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/users', require('./user.router.js'));
router.use('/events', require('./event.router.js'));

module.exports = router;
