const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    hotUpdateChunkFilename: "[id].[fullhash].hot-update.js",
    clean: true,
    pathinfo: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  devServer: {
    client: {
      overlay: true,
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port : 3030,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
  },
});
