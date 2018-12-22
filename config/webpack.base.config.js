const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口配置
  entry: {
    main: path.join(__dirname, '../src/index.js'),
  },
  // 输出配置
  output: {
    filename: 'js/[name].js', // 输出文件的文件名
    path: path.join(__dirname, '../dist'), // 输出文件所在目录
  },
  // 加载器
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          minimize: true
        }
      }]
    }]
  },
  // 插件管理
  plugins: [
    //创建 .html 并自动引入打包后的文件
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      // 参照最初创建的 .html 来生成 .html
      inject: true,
      // 引入根路径下的 favicon.ico
      favicon: path.resolve('favicon.ico')
    })
  ]
};