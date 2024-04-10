const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Точка входа для сборки проекта

  output: {
    filename: "bundle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: [miniCss.loader, "css-loader", "sass-loader"], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    // eslint-disable-next-line new-cap
    new miniCss({
      filename: "style.css",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: "development", // Режим сборки
};
