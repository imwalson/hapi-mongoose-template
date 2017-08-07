const mongoose = require('mongoose');
const _ = require('lodash');

const Config = requireR('/config');
const server = requireR('/app');

const test = function (x, y, callback) {
    callback(null, x + y);
};

server.method('test', test, {});