'use strict';

const _ = require('lodash');

const DB = require('../db.js');

const EventModel = require('../model/event.model.js');

const EventRepository = {
    create: (userId, type, data) => {
        return EventModel.build({ userId, type, data }).save();
    },

    update: (id, type, data) => {
        return DB.sequelize.query(
            `UPDATE "${DB.getSchema()}"."${EventModel.name}" ` +
                'SET type = :type, data = :data, "updatedAt" = NOW() ' +
                'WHERE id = :id',
            { replacements: { type, data: JSON.stringify(data), id }}
        ).spread((result, metadata) => {
            return _.toNumber(metadata.rowCount) === 1;
        });
    },

    get: (id) => {
        return EventModel.findOne({
            where: { id }
        });
    },

    getAll: (offset = 0, limit = 25, search = '') => {
        const query = {
            offset,
            limit,
            order: [['createdAt', 'DESC']],
            raw: true
        };

        if (!_.isEmpty(search)) {
            query.where = {
                type: { ilike: `%${search}%` }
            };
        }

        return EventModel.findAll(query);
    },

    getAllByUserId: (userId, offset = 0, limit = 25, search = '') => {
        const query = {
            offset,
            limit,
            where: { userId },
            order: [['createdAt', 'DESC']],
            raw: true
        };

        if (!_.isEmpty(search)) {
            query.where.type = {
                ilike: `%${search}%`
            };
        }

        return EventModel.findAll(query);
    },

    remove: (id) => {
        let data;
        return EventModel.findById(id)
            .then((record) => {
                data = record;
                return record.destroy();
            })
            .then(() => {
                return data;
            });
    },

    removeByUserId: (userId) => {
        return EventModel.destroy({
            where: { userId }
        })
        .then((data) => {
            console.log(data);
            return 1;
        });
    }
};

module.exports = EventRepository;