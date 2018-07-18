const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //有没有入口文件？ 因为默认的入口文件是./src/index.js
    //有没有出口文件？ 因为默认的出口文件是./dist/main.js
    //模块规则，进行加载器的操作
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,//exclude是排除，将node_modules这一目录排除
          use: {
            loader: "babel-loader"
          }
        },
        {
          　　　　　　test: /\.(png|jpg|woff|woff2|svg|ttf|eot)$/,
          　　　　　　loader: 'url-loader?limit=99999999'
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 2,
                      sourceMap: true
                  }
              },
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true
                  }
              }
          ]
        }
  
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
          filename: "dist/[name].css",
        })
      ]
  };