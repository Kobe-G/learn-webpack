module.exports={
    entry:{
        index:'./src/index.js',
        home:'./src/home.js',
        app:'./src/app.js'
    },
    mode:'development',
    output:{
        filename:'[name]_[hash:4].js',
        path:__dirname + '/build'
    }
}