'use strict';

const uuid = require('uuid');

const DB = require('../db.js');

const UserModel = DB.sequelize.define('User', {
    id: {
        type: DB.Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    name: {
        type: DB.Sequelize.TEXT,
        allowNull: false,
        unique: true,
    },

    description: {
        type: DB.Sequelize.TEXT,
        allowNull: true,
        unique: false,
    },
}, {
    hooks: {
        beforeValidate: (user) => {
            user.id = user.id || uuid.v4();
        }
    }
});

module.exports = UserModel;