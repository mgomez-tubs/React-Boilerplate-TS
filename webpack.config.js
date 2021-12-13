const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require('path');

module.exports = (env) => {
  const isDevelopment = env.development || false;
  const options = {
    generateBundleAnalyzer : false
  }
  return {
    mode: isDevelopment ? "development" : "production",
    entry: "./src/index.tsx",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "babel-loader",
          },
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        { 
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
              }
            }
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        },
      ],
    },
    devServer: {
      hot: true,
      clientLogLevel: "silent",
      contentBase: "./dist",
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      options.generateBundleAnalyzer && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
    devtool: "eval-source-map",
    optimization: {
      usedExports: true,
    },
  };
};
