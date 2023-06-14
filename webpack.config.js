const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: ['./41-Webpack/src/index.js', './41-Webpack/assets/style.scss'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          { loader: "file-loader", options : { name: '[hash:base64:5]-[name].css' } },
          { loader: "sass-loader" }
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./41-Webpack/index.html" }),
  ]
};