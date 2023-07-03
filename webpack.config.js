const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/comic.ts',
    output: {
        filename: 'comic.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', to: 'assets' },
                {from: 'index.html', to:'index.html'},
                {from: 'comic.html', to:'comic.html'},
            ],
        }),
    ],
};
