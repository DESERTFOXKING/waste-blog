const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
  },
  optimization: { // 代码分割配置
    splitChunks: {
      chunks: 'all', // 'initial': 入口代码块 | 'all': 全部 | 'async': 按需加载的代码块
      minSize: 30000, // 模块大小超过30kb的模块才会提取
      // maxSize: 0, // 只是提示，可以被违反，会尽量将chunk分的比maxSize小，当设为0代表能分则分，分不了不会强制
      minChunks: 1, // 某个模块至少被多少代码块引用，才会被提取成新的chunk
      maxAsyncRequests: 5, // 分割后，按需加载的代码块最多允许的并行请求数，在webpack5里默认值变为6
      maxInitialRequests: 3, // 分割后，入口代码块最多允许的并行请求数，在webpack5里默认值变为4
      automaticNameDelimiter: "~", // 代码块命名分割符
      // name: true, // 每个缓存组打包得到的代码块的名称
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/, //匹配node_modules中的模块
      //     priority: -10, //优先级，当模块同时命中多个缓存组的规则时，分配到优先级高的缓存组
      //   },
      //   default: {
      //     minChunks: 2, //覆盖外层的全局属性
      //     priority: -20,
      //     reuseExistingChunk: true, //是否复用已经从原代码块中分割出来的模块
      //   },
      // },
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
