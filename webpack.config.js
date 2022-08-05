const path = require("path");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  target: ["web"],
  entry: "./src/index.js",
  entry: {
    'bundle': ['/src/public/app.js', '/src/index.js'],
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ["@babel/plugin-transform-runtime"],
            }
          }
        }
      ],
  },
  devServer: {
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
    allowedHosts: "all",
    watchFiles: [path.join(__dirname, "src/**/*")],
    compress: true,
    port: 8000,
  },
};
