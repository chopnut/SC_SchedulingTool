const path      = require('path');
const webpack   = require('webpack');


module.exports = {
    entry: ["babel-polyfill","./entry.js"],
    output: {
        path: __dirname+"/public/assets/js/",
        publicPath: "/public/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".json"]
    },
    module: {
        loaders: [
            {test: /\.scss$/,loader: "style-loader!css-loader!resolve-url-loader!postcss-loader!sass-loader"},
            { test: /\.css$/, loader: "style-loader!css-loader!resolve-url-loader" },
            { test: /\.(png|jpg|gif|eot|woff2|svg|ttf|woff)$/, loader: "url-loader?publicPath=assets/&limit=5000&name=img/img-[hash:6].[ext]"},
            { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ["react", "es2015"],plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"] }}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
   })]
}
