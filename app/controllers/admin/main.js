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
  },
  // 后台首页
  index: {
    handler: function (request, reply) {
      reply.view('elementAdmin/index',{
        title: "管理后台"
      });
    }
  },
  dashboard: {
    handler: function (request, reply) {
      reply.view('elementAdmin/dashboard',{
        title: "管理后台"
      });
    }
  },
};

