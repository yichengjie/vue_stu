/**
 * Created by yicj on 2016/7/1.
 */
var webpack = require('webpack') ;

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.(png|jpg|gif)$/,loader: 'file?name=imgs/[name].[ext]?[hash]'}
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}
