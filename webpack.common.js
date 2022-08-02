const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        include: [
          path.resolve(__dirname, "src/"),
        ],
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
        include: [
          path.resolve(__dirname, "src/assets/"),
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        include: [
          path.resolve(__dirname, "src/sass/"),
        ],
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", "ts", "..."],
  },
};
