const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const prod = process.env.NODE_ENV == "production";

module.exports = {
  entry: {
    myAppName: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: prod ? "[name].[contenthash].js" : "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",

          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: !prod,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack & React",
      template: "./public/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: prod ? "[name].contenthash].css" : "[name].css",
    }),
  ],
  devServer: {
    hot: true,
    port: 3001,
  },
  mode: prod ? "production" : "development",
};
