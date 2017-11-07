'use strict';

const _ = require('lodash');

const EventRepository = require('../repository/event.repository.js');

const makePresentable = (record) => {
    return {
        id: record.id,
        userId: record.userId,
        type: record.type,
        data: record.data
    };
};

const EventService = {
    createEvent: (userId, type, data) => {
        return EventRepository.create(userId, type, data)
            .then((record) => {
                return makePresentable(record);
            })
            .catch(() => {
                throw new Error(`Could not create new user`);
            });
    },

    updateEvent: (eventId, type, data) => {
        return EventRepository.update(eventId, type, data)
            .then((isUpdated) => {
                if (isUpdated) {
                    return { id: eventId, type, data };
                }

                throw new Error(`Event with ID ${eventId} does not exist`);
            });
    },

    getEvent: (eventId) => {
        return EventRepository.get(eventId)
            .then((record) => {
                return makePresentable(record);
            })
            .catch(() => {
                throw new Error(`Event with ID ${eventId} does not exist`);
            });
    },

    getEvents: (offset = 0, limit = 0, search = '') => {
        return EventRepository.getAll()
            .then((record) => {
                return _.map(record, makePresentable);
            })
            .catch(() => {
                throw new Error(`Could not get list of events`);
            });
    },

    getEventsByUserId: (userId, offset = 0, limit = 25, search = '') => {
        return EventRepository.getAllByUserId(userId)
            .then((record) => {
                return _.map(record, makePresentable);
            })
            .catch(() => {
                throw new Error(`User with ID ${userId} does not exist`);
            });
    },

    removeEvent: (eventId) => {
        return EventRepository.remove(eventId)
            .then((record) => {
                return makePresentable(record);
            })
            .catch(() => {
                throw new Error(`Could not delete event with ${eventId}`);
            });
    },

    removeEventsByUserId: (userId) => {
        return EventRepository.removeByUserId(userId)
            .then(() => {
                return `Removed all events with userId ${userId}`;
            })
            .catch(() => {
                throw new Error(`Could not delete events with user ID ${userId}`);
            });
    },
};

module.exports = EventService;