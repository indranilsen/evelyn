'use strict';

const _ = require('lodash');
const router = require('express').Router();

const EventService = require('../service/event.service.js');

router.post('/', (req, res) => {
    EventService.createEvent(req.body.userId, req.body.type, JSON.parse(req.body.data))
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.get('/', (req, res) => {
    EventService.getEvents()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.get('/:id', (req, res) => {
    EventService.getEvent(req.params.id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.get('/userId/:userId', (req, res) => {
    EventService.getEventsByUserId(req.params.userId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.put('/:id', (req, res) => {
    EventService.updateEvent(req.params.id, req.body.type, JSON.parse(req.body.data))
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.delete('/:id', (req, res) => {
    EventService.removeEvent(req.params.id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

router.delete('/userId/:userId', (req, res) => {
    EventService.removeEventsByUserId(req.params.userId)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

module.exports = router;