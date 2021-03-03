const path = require('path')

module.exports = {
    entry: './public/js/shop-entry.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
};
