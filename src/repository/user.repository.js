'use strict';

const _ = require('lodash');

const DB = require('../db.js');

const UserModel = require('../model/user.model.js');

const UserRepository = {
    create: (name, description) => {
        return UserModel.build({ name, description }).save();
    },

    update: (id, name, description) => {
        return DB.sequelize.query(
            `UPDATE "${DB.getSchema()}"."${UserModel.name}" ` +
                'SET name = :name, description = :description, "updatedAt" = NOW() ' +
                'WHERE id = :id',
            { replacements: { name, description, id }}
        ).spread((result, metadata) => {
            return _.toNumber(metadata.rowCount) === 1;
        });
    },

    get: (id) => {
        return UserModel.findOne({
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
                $or: {
                    name: { ilike: `%${search}%` },
                    description: { ilike: `%${search}%` }
                }
            };
        }

        return UserModel.findAll(query);
    },

    remove: (id) => {
        let data;
        return UserModel.findById(id)
            .then((record) => {
                data = record;
                return record.destroy();
            })
            .then(() => {
                return data;
            });
    }
};

module.exports = UserRepository;