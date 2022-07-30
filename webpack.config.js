const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname + "/build",
        filename: "bundler.js"
    },
    mode: "development",
    module: {
        rules: [
            {
               test: /\.js$/,
               loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader": MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCSSExtractPlugin({
            filename: "bundler.css"
        }),
        new DotenvWebpackPlugin()
    ]
}