const path = require('path')

module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /three\/examples\/js/,
        use: [
          {
            loader: 'imports-loader',
            options: {
              THREE: 'three'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      'three-examples': path.resolve(__dirname, './node_modules/three/examples/js')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    public: '0.0.0.0:4000',
    port: 4000,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true
  }
}
