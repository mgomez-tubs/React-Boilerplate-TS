const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    hotUpdateChunkFilename: "[id].[fullhash].hot-update.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': 'https://premium.telemartin.tv/wp-content/plugins/telemartin-learnapp/app/build/'
    })
  ],
  optimization: {
    sideEffects: true,
    usedExports: true,
    minimize: true,
  },
});
