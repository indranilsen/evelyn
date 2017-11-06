'use strict';

const router = require('express').Router();

router.use('/heads', require('./event.router.js'));

module.exports = router;
