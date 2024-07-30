const path = require("path");

module.exports = {
  entry: "./src/index.js", // Входной файл
  output: {
    path: path.resolve(__dirname, "dist"), // Папка для выходных файлов
    filename: "bundle.js", // Имя выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Регулярное выражение для обработки CSS файлов
        use: [
          "style-loader", // Вставляет CSS в DOM через теги <style>
          "css-loader", // Интерпретирует @import и url() как require()
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
