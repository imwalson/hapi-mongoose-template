// 设置 session
const server = requireR('/app');

server.ext('onPostAuth', function (request, reply) {
    request.app.session = (request.yar && request.yar._store) ? request.yar._store : null;
    reply.continue();
});