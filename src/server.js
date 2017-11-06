'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use('/api', require('./route/routes.js'));

app.listen(port, () => {
    console.log('Listening on port: ', port);
});