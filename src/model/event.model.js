'use strict';

const uuid = require('uuid');

const DB = require('../db.js');

const UserModel = require('./user.model.js');

const EventModel = DB.sequelize.define('Event', {
    id: {
        type: DB.Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    userId: {
        type: DB.Sequelize.UUID,
        allowNull: false,
        unique: false
    },

    type: {
        type: DB.Sequelize.TEXT,
        allowNull: true,
        unique: false,
    },

    data: {
        type: DB.Sequelize.JSONB,
        allowNull: false,
        defaultValue: {},
        unique: false
    },
}, {
    hooks: {
        beforeValidate: (event) => {
            event.id = event.id || uuid.v4();
        }
    }
});

EventModel.belongsTo(UserModel, { as: 'User', foreignKey: 'userId' });

module.exports = EventModel;