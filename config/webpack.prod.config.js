// 引入公共配置
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackBaseConfig, {
  // 指定模式
  mode: 'production'
});