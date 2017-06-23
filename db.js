'use strict';

var Config = require('./config');
// 创建db引用
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect( Config.mongoDB.url );
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection connected');
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error: ' + err);
});
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);   
    });
});
// 导出连接对象
module.exports = mongoose;