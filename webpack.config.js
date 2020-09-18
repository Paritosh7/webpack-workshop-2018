const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  console.log(env);
  return {
    mode: env.mode,
    output: { filename: "bundle.js" },
    plugins: [new htmlWebpackPlugin(), new webpack.ProgressPlugin()],
  };
};
