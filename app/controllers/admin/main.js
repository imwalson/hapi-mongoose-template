const Joi = require('joi');

const Config = requireR('/config');
const server = requireR('/app');

module.exports = {
  // 后台登录
  login: {
    handler: function (request, reply) {
      reply.view('login',{title: "登录"});
    }
  },
  // 后台退出
  logout: {
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

