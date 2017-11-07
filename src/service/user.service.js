'use strict';

const _ = require('lodash');

const UserRepository = require('../repository/user.repository.js');

const makePresentable = (record) => {
    return {
        id: record.id,
        name: record.name,
        description: record.description
    };
};

const UserService = {
    createUser: (name, description) => {
        return UserRepository.create(name, description)
            .then((record) => {
                return makePresentable(record);
            })
            .catch(() => {
                throw new Error(`Could not create new user`);
            })
    },

    updateUser: (userId, name, description) => {
        return UserRepository.update(userId, name, description)
            .then((isUpdated) => {
                if (isUpdated) {
                    return { id: userId, name, description };
                }

                throw new Error(`Could not find user with ID ${userId}`);
            });
    },

    getUser: (userId) => {
        return UserRepository.get(userId)
            .then((record) => {
                return makePresentable(record);
            });
    },

    getUsers: (offset, limit, search) => {
        return UserRepository.getAll()
            .then((record) => {
                return _.map(record, makePresentable);
            })
            .catch(() => {
                throw new Error(`Could not get list of user`);
            });
    },

    removeUser: (userId) => {
        return UserRepository.remove(userId)
            .then((record) => {
                return makePresentable(record);
            })
            .catch(() => {
                throw new Error(`Could not delete user with ${userId}`);
            });
    }
};

module.exports = UserService;