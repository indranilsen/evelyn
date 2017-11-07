'use strict';

const _ = require('lodash');
const Sequelize = require('sequelize');

delete require('pg').native;

const sequelizeDefaults = {
    dialect: 'postgres',
    database: 'postgres',
    schema: 'events',
    define: {
        timestamps: true,
        paranoid: false,
        freezeTableName: true
    }
};

const validateSchema = () => {
    return DB.sequelize.query(`CREATE SCHEMA IF NOT EXISTS "${DB.getSchema()}";`);
};

const DB = {
    Sequelize: Sequelize,

    sequelize: {},

    Model: {},

    getSchema: () => {
        return sequelizeDefaults.schema;
    },

    initialize: (config) => {
        const options = _.defaults({}, config, sequelizeDefaults);

        DB.sequelize = new Sequelize(options);
        DB.Model.Event = require('./model/event.model.js');
        DB.Model.User = require('./model/user.model.js');

        return validateSchema()
            .then(() => {
                return DB.sequelize.sync();
            });
    }
};

module.exports = DB;