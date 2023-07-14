const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.js",
  devServer: {
    // static: {
    // 	directory: path.join(__dirname, 'dist'),
    // },
    compress: true,
    port: 8080,
  },
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: ["json-loader"],
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@data": path.resolve(__dirname, "data/"),
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new cleanWebpackPlugin.CleanWebpackPlugin({}),
  ],
};
