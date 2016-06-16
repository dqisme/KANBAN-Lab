module.exports = {
    entry: './src/index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts']
            }
        ]
    }
};
