// 测试中间件
const server = require('../../app');

server.ext('onRequest', function (request, reply) {
    //server.log("debug","中间件  path："+request.path+"method:"+request.method);
    reply.continue();
});