//const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const GoogleFontsPlugin = require("google-fonts-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const js = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};

const scss = {
    test: /\.(scss|sass)$/,
    use: ["style-loader", "css-loader", "sass-loader"]
};

const img = {
    test: /\.(jpg|png|gif)$/,
    use: {
        loader: "file-loader",
        options: {
            name: "./images/[name].[hash].[ext]"
        },
    },
};

const cssExtract = {
    test: /\.scss$/,
    use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
};

module.exports = {
    entry: {
        app: "./src"
    },
    resolve: {
        modules: ["node_modules"]
    },
    module: {
        rules: [cssExtract, js, img]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
/*        new HtmlWebpackPlugin({
            filename: "index.php",
            title: "AMEC M3",
            template: "./src/pug/index.pug",
            inject: false,
            appMountId: "app"
        }),*/
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new BrowserSyncPlugin( {
                proxy: "http://m3project.local:8888/m3",
                files: [
                    '**/*.php',
                    '**/*.js',
                    '**/*.scss',
                ]
            }
        )
    ],
    devtool: 'source-map',
   devServer: {
        stats: "errors-only",
        host: process.env.HOST,
        port: process.env.PORT,
        open: true,
        overlay: true,
        historyApiFallback: true

    }
};