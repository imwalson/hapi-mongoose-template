# hapi-mongoose-template
自用的 hapi 工程模版项目，整合最常用的工具库，并将项目结构规范化，整体更加清晰

## 概要

采用 node.js + mongodb + vue 的web项目示例工程。应用主框架采用 `hapi,js` ，数据库ORM用`mongoose` ，视图模板引擎是`swig.js` 。实现了用户注册登录、文章管理；前台界面和后台 admin 管理界面，

## 目录结构

整体采用 MVC 架构，自动加载路由、分文件夹分文件管理各部分功能模块

+ **app**  应用主要的目录，业务“模型”、“路由”、“控制器”、“方法”都在这个文件夹下
  - routes   *存放路由文件，按照业务逻辑分多文件夹多文件，对应具体的业务模块*
  - controllers *控制器，原则上目录结构和命名应该和路由文件一一对应*
  - models  *存放 mongoose 数据库模型*
  - methods *hapi 的 服务端 methods 方法存放处*
  - middleware *中间件目录，用于处理请求的完整生命周期内可能需要的业务逻辑（如权限验证等）*
+ **assets**  静态文件目录，可公开访问，需要控制访问权限的文件请勿放在此处
+ **views**  存放 VIEW 视图模版
+ **templates**  存放邮件模版
+ **app.js**  应用主文件
+ **config.js**  配置文件
+ **db.js**  数据库连接相关