const server = require('../../../app');
const Joi = require('joi');

module.exports = {
  // 后台登录
  login: {
    handler: function (request, reply) {
      reply.view('login',{title: "登录"});
    }
  },
  // 后台退出
  logout: {
    auth: {
      mode: 'try',
      strategy: 'session'
    },
    handler: function (request, reply) {
      reply.view('admin_home', {
          title: 'Logout page'
      })
    }
  }
};

