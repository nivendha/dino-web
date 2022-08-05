const path = require("path");

module.exports = {
  mode: "development",
  target: ["web"],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dino.bundle.js",
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
