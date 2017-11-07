'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const config = require('nconf')
    .env({ lowerCase: true })
    .argv()
    .file('environment', { file: `./src/config/local.json` })
    .file('defaults', { file: `./src/config/default.json` });

const DB = require('./db.js');
const port = config.get('port');

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./route/routes.js'));

DB.initialize(config.get('db'))
    .then(() => {
        app.listen(port, () => {
            console.log('Listening on port: ', port);
        });
    });