const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  plugins: [
    new miniCSSExtractPlugin({
      filename: "estilo.css"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        miniCSSExtractPlugin.loader, // extrai o CSS para um arquivo destino
        //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
        'css-loader', // interpreta @import, url()...
        'sass-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
}

// export NODE_OPTIONS=--openssl-legacy-provider