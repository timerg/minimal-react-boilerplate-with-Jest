const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        // publicPath: 'http://[YourDomain.com]/',
        publicPath: '/',
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        host: "localhost",
        contentBase: "./public",
        hot: true,
    },

}


