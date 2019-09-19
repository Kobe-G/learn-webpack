var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:__dirname+'/dist'
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/.less$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader"]
                })
            },
            {
                test:/\.(jpg|png|svg)/,
                use:['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            cleanOnceBeforeBuildPatterns: ['dist'],
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'prod',
        }),
        new ExtractTextPlugin('style.css'),
    ]
};