const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { returnJson } = require("./readFiles");
returnJson();

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  devServer: {
    port: "9797",
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ipa|docs|pdf|md)/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "/public/index.html"),
    }),
  ],
};
