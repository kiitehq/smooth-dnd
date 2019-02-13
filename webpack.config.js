const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const dirname = __dirname // eslint-disable-line

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(dirname, 'dist'), 
    filename: 'index.js',
    library: 'SmoothDnD',
    libraryTarget: "umd",
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/styles.css', to: 'styles.css' }
    ], {})
  ]
}
