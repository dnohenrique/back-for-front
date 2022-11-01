'use strict';

const variables = require('./environment');
const environment = process.env.NODE_ENV || 'local'; // local, dev

console.warn('Enviroment running:', environment);

module.exports = {
    environment,
    variables
};