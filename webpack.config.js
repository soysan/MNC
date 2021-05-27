const enabledSourceMap = process.env.NODE_ENV !== 'production';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: `./src/js/index.js`,
    output: {
        path: path.resolve(__dirname, 'dist/css'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('sass'),
                            // sassOptions: {
                            //     fiber: false,
                            // },
                            sourceMap: enabledSourceMap,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "mnc.css",
        }),
    ],
    devtool: "source-map",
    watchOptions: {
        ignored: /node_modules/
    },
    // // {development,production,none} のちに変える
    // mode: "development"
};
