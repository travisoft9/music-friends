module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "client/dist/bundle.js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}
