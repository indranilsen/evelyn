'use strict';

const _ = require('lodash');
const router = require('express').Router();

const UserService = require('../service/user.service.js');

router.post('/', (req, res) => {
    UserService.createUser(req.body.name, req.body.description)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.get('/', (req, res) => {
    UserService.getUsers()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.get('/:id', (req, res) => {
    UserService.getUser(req.params.id)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.put('/:id', (req, res) => {
    UserService.updateUser(req.params.id, req.body.name, req.body.description)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.delete('/:id', (req, res) => {
    UserService.removeUser(req.params.id)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

module.exports = router;