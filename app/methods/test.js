const mongoose = require('mongoose');
const _ = require('lodash');

const CONFIG = require('../../config');
const server = require('../../app');

const test = function (x, y, callback) {
    callback(null, x + y);
};

server.method('test', test, {});
// 完整写法
// server.method({
//     name: 'test',
//     method: test,
//     options: {}
// });