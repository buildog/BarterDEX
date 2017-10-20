import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import baseConfig from '../webpack.config.base'

const config = merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    debug: true,
    entry: './app/index',

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })],

    target: 'electron-renderer',

    externals: [
        'font-awesome',
        'source-map-support',
        'request',
        'mailgun-js',
        'os'
    ]
})

export default config
