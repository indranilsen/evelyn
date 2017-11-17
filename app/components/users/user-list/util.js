const _forEach = require('lodash.foreach');

function cleanValues(values) {
    return values.filter((value) => {
        return typeof value === 'string' || isFinite(value);
    });
}

const Util = {
    createFilter: (searchString, keys, options = {}) => {
        return (item) => {
            if (searchString === '') {
                return true
            }

            if (!options.caseSensitive) {
                searchString = searchString.toLowerCase()
            }

            const searchTokens = searchString.split(' ');

            if (!keys) {
                return searchTokens.every((token) => {
                    Util.searchStrings([item], token, options)
                });
            }

            if (typeof keys === 'string') {
                keys = [keys]
            }

            return searchTokens.every((token) => {
                return keys.some((key) => {
                    const values = Util.getValues(key, item);
                    return Util.searchStrings(values, token, options);
                });
            });
        }
    },

    getValues: (field, item) => {
        const keys = field.split('.');
        let values = [item];

        _forEach(keys, (key) => {
            let collector = [];

            _forEach(values, (value) => {

                if (value) {

                    if (value instanceof Array) {
                        const index = parseInt(key);
                        if (!isNaN(index)) {
                            return collector.push(value[index])
                        }

                        _forEach(value, val => {
                            collector.push(val[key])
                        })
                    }

                    collector.push(value[key])
                }
            });

            values = collector;
        });

        return cleanValues(values);
    },

    searchStrings: (strings, term, options) => {
        strings = strings.map((string) => {
            return string.toString()
        });

        return strings.some((value) => {
            if (!value) {
                return false;
            }

            if (!options.caseSensitive) {
                value = value.toLowerCase();
            }

            return (value.search(term) > -1);
        });
    }
};

module.exports = Util;