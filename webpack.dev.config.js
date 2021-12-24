const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: "eval-cheap-module-source-map", // 开启source-map, 保存源代码映射关系的文件
  devServer: {
    historyApiFallback: true, // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
    open: true, // 自动打开浏览器
    hot: true, // 默认为true
    compress: true, // 是否开启代码压缩
    port: 6060, // 启动的端口
  },
});
