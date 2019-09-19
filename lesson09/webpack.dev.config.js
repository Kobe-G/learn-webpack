var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:__dirname+'/dist_dev'
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
            cleanOnceBeforeBuildPatterns: ['dist_dev'],
        }),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'dev',
        }),
        new ExtractTextPlugin('style.css'),
    ]
}