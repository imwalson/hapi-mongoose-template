/**
 * 用户表
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    // 用户名
    username: { type: String, required: true, unique: true },
    // 昵称
    nickname: { type: String, required: true },
    // 登录密码
    password: { type: String, required: true },
    // 性别
    sex: String,
    // 出生年月
    birthday: Date,
    // 手机号
    phone: String
});

module.exports = mongoose.model('User', userSchema);