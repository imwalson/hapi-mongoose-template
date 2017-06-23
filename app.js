/**
* 引入第三方包
*/
const Hapi = require('hapi');
const Inert = require('inert');
const glob = require('glob');
const Vision = require('vision');
const Good = require('good');
const _= require('lodash'); 
const path = require('path');
const swig = require('swig'); 
// 更改 swig 模板的变量定界符，防止和前端 vue 的冲突
swig.setDefaults({
   varControls: ['<%', '%>'] 
});

/**
* 引入本地模块
*/
const db = require("./db");
const Config = require('./config');
/**
* 初始化 hapi Server
*/
const server = new Hapi.Server({
    cache: [
        {
            name: 'mongoCache',
            engine: require('catbox-mongodb'),
            uri: "mongodb://127.0.0.1:27017/",
            partition: 'hapiMongooseDemo'
        }
    ]
});
server.connection({ 
    host: Config.server.host, 
    address : Config.server.address, 
    port: Config.server.port,
});
// 导出 server 对象
module.exports = server;

// 加载所有服务端方法 (server.method)
var serverMethods = glob.sync(path.join(__dirname, 'app/methods/**/*.js'));
serverMethods.forEach(function (methodFile) {require(methodFile);});

// 加载视图渲染组件 swig
server.register(Vision, function (err) {  
  if (err) {
    console.log('Cannot register vision')
  }
  // 视图引擎的全局变量
  const defaultContext = {
    globalTitle: 'My personal site'
  };
  server.views({
    engines: {
        html: swig
    },
    context: defaultContext,
    path: __dirname + '/views'
  })
})  

// 路由静态文件
server.register(Inert, function (err) {
    server.route([
        {
            method: 'GET',
            path: '/favicon.ico',
            config: {
                handler: function (request, reply) {
                    reply.file('./favicon.ico');
                }
            }
        },
        {
            method: 'GET',
            path: '/robots.txt',
            config: {
                handler: function (request, reply) {
                    reply.file('./robots.txt');
                }
            }
        },
        {
            method: 'GET',
            path: '/assets/{path*}',
            config: {
                handler: {
                    directory: { path: './assets' }
                }
            }
        }
    ]);
})

// 添加调试专用路由
// if (Config.debugMode) {
//     require('./dev_route');  
// }

// 注册日志模块
server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: 'error',
                    request: 'error',
                    error: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, function(err) {
    if (err) {
        throw err;
    }
});

// 注册 session 组件并引入路由
server.register(require('hapi-auth-cookie'), function (err) {  
    if (err) {
        throw err; // something bad happened loading the plugin
    }
    // sessions 缓存
    var cache = server.cache({ 
        cache: 'mongoCache',// mongo 缓存系统
        segment: 'sessions', // 分段标识
        expiresIn: 24 * 60 * 60 * 1000 
    });
    server.app.sessionsCache = cache;

    // Set our strategy
    server.auth.strategy('session', 'cookie', {
        password: 'JZIn1cr75aE0daghaVNvbqMPItPtFoEc', // cookie secret
        cookie: 'session', // Cookie name
        isSecure: false, // required for non-https applications
        ttl: 22 * 60 * 60 * 1000 ,// Set session to 22 小时
        clearInvalid: true,
        keepAlive: true,
        validateFunc: function (request, session, callback) {
            cache.get(session.sid, function(err, cached) {
                if (err) {
                    return callback(err, false);
                }
                if (!cached) {
                    return callback(null, false);
                }
                return callback(null, true, cached.account);
            });
        }
    });

    // 加载所有路由
    var routes = glob.sync(path.join(__dirname, 'app/routes/**/*.js'));
    routes.forEach(function (routeFile) {require(routeFile);});
})

// 加载所有中间件
var middlewares = glob.sync(path.join(__dirname, 'app/middleware/**/*.js'));
middlewares.forEach(function (middlewareFile) {require(middlewareFile);});

// 开始运行服务
server.start(function(err) {
    if (err) {
        throw err;
    }
    server.log('info', 'Server running at: ' + server.info.uri);
});
