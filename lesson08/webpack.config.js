var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry:{
        index:'./src/index.js'
    },
    mode:'development',
    devServer:{
        contentBase:'./dist',
        hot:true,

    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

};