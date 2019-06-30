const path = require('path');
// 引入公共配置
const webpackBaseConfig = require('./webpack.base.config');
// 合并配置的插件
const webpackMerge = require('webpack-merge');
// 用于分离 CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
// 打包前移除之前的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 复制静态文件
const CopyPlugin = require('copy-webpack-plugin');

module.exports = webpackMerge(webpackBaseConfig, {
  // 指定模式
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.less$/,
      use: [{
        loader: MiniCssExtractPlugin.loader // extracts CSS into separate files
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'postcss-loader', // Automatically add browser prefix
      }, {
        loader: 'less-loader' // compiles Less to CSS
      }]
    }]
  },
  // 插件配置
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/server/api', to: 'api' },
    ]),
  ],
});
