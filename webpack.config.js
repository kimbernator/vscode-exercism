const path = require("path");

const webview = {
  name: "webview",
  entry: {
    index: "./preview/index.tsx"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};

const extension = {
  name: "extension",
  target: "node",
  entry: "./src/extension.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "extension.js",
    libraryTarget: "commonjs2"
  },
  externals: {
    vscode: "commonjs vscode"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};

module.exports = [extension, webview];
