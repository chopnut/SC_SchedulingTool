const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill","./entry.js"],
    output: {
        path: __dirname+"/public/",
        publicPath: "/public/",
        filename: "assets/js/bundle.js"
    },
    resolve: {
        extensions: [ ".js", ".jsx", ".json"]
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "resolve-url-loader",
                            options:{
                              debug: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                              plugins: () => [require("autoprefixer")]
                            }                       
                        },  
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }),
                
            },
            { test: /\.css$/, loader: "style-loader!css-loader!resolve-url-loader" },
            {
                test: /\.(png|jpg|gif|eot|woff2|svg|ttf|woff)$/,
                loader: "url-loader",
                options: {
                    limit: 5000,
                    name: 'img-[hash:6].[ext]',
                    outputPath: 'assets/img/',
                    publicPath: 'assets/img/'
                }
            },
            { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ["react", "es2015"],plugins: ["transform-es2015-destructuring","transform-object-rest-spread"] }}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
        }), 
        new ExtractTextPlugin("assets/css/styles.css")
    ]
}
