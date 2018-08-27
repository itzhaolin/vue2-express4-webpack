var express = require('express')
var path = require('path')

var app = express();// 创建一个express实例

var history = require('connect-history-api-fallback')
app.use(history())

if (app.get('env') == 'development') { // 判断环境变量
  var webpack = require('webpack')
  var webpackConfig = require('./build/webpack.base.conf')
  var compiler = webpack(webpackConfig);// 调用webpack并把配置传递过去

  // 使用 webpack-dev-middleware 中间件 
  // 编译后放在内存中 不写入硬盘(真正发布时不需要的代码)
  var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    stats: {
      colors: true,
      chunks: false
    }
  });
  app.use(devMiddleware);
  app.use(require("webpack-hot-middleware")(compiler)) // 热更新

  app.listen(3008, function () {
    console.log('server start at ==>  http://localhost:3008/')
  })
} else {
  app.use(express.static('dist'));
}

module.exports = app;
