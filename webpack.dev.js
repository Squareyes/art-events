const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ["./_assets/scripts/main.js", "./_assets/styles/main.scss" ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: __dirname + '/assets/scripts'
  },
  watch: true,
  plugins: [
    new LiveReloadPlugin({
      delay: 500
    })
  ]
};
