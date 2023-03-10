const path = require('path')
module.exports = {
  entry: './src/Index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {       
      directory: path.resolve(__dirname, '../dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  }
}