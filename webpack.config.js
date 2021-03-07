const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './public/js/shop-entry.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: "main.js"
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
