const path = require('path');
const glob = require("glob-all");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
  components: path.join(__dirname, "components"),
  index: path.join(__dirname, "index.tsx"),
  root: path.resolve(__dirname, './'),
};

function collectSafelist() {
  return {
    standard: ["safelisted", /^safelisted-/],
    deep: [/^safelisted-deep-/],
    greedy: [/^safelisted-greedy/],
  };
}

module.exports = {
  target: "web",
  mode: "production",
  //devtool: "inline-source-map",
  entry: {
    web: "./index.tsx",
  },
  output: {
    path: PATHS.root,
    filename: "[name].bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      "fs": false,
      "path": false,
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'web.bundle.css', // Name of the output bundle file
    }),
    new PurgeCSSPlugin({
      paths: [PATHS.index, ...glob.sync(`${PATHS.components}/**/*`, { nodir: true })],
      safelist: collectSafelist,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Minimize CSS
      new TerserPlugin(), // Minimize JavaScript
    ],
    minimize: true,
  },
};