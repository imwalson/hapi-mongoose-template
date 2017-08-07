const Joi = require('joi');

const Config = requireR('/config');
const server = requireR('/app');

module.exports = {
    // 404 页
    notFound: {
        handler: function (request, reply) {
            reply.view('404',{title: "页面不存在"});
        }
    },
    // 首页
    index: {
        handler: function (request, reply) {
            reply.view('index',{title: "首页"});
        }
    },
    // 登录
    login: {
        handler: function (request, reply) {
            reply.view('login',{title: "登录"});
        }
    },
};

