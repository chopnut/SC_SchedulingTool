const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname+"/public/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader!resolve-url-loader" },
            { test: /\.(png|jpg|gif|eot|woff2|svg|ttf|woff)$/, loader: "url-loader?publicPath=assets/&limit=5000&name=img/img-[hash:6].[ext]" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
   })]
}