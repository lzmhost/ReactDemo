const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// css打包插件。
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextPlugin = new ExtractTextPlugin('index.css', {
    disable: false,
    allChunks: true
});

module.exports = {
    entry: {// 打包（计算依赖）的入口文件。
        'index': [path.resolve(__dirname, '../src/Index.jsx')],
        // 'react': ['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'react-router', 'babel-polyfill', 'isomorphic-fetch'],
        // 'antd': ['antd']
    },
    output: {
        filename: '[name].js' // 编译结果的输出文件，[name]指的是来源entry中的文件名。
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react': path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
            'react-redux': path.resolve(__dirname, '../node_modules/react-redux'),
            'react-router-dom': path.resolve(__dirname, '../node_modules/react-router-dom'),
            'redux': path.resolve(__dirname, '../node_modules/redux'),
            'redux-thunk': path.resolve(__dirname, '../node_modules/redux-thunk'),
            'react-router': path.resolve(__dirname, '../node_modules/react-router'),
            'babel-polyfill': path.resolve(__dirname, '../node_modules/babel-polyfill'),
            'isomorphic-fetch': path.resolve(__dirname, '../node_modules/isomorphic-fetch'),
            'antd': path.resolve(__dirname, '../node_modules/antd'),
        }
    },
    module: {
        loaders: [
            {
                // 打包React代码需要引用Babel作为翻译器，并加入es2015, react等特性。
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, '../src')], //C:\workbench\git-repository\org.magicsoft\commons-react\ //path.resolve(__dirname, '../node_modules/commons-react'),
                loader: require.resolve('babel-loader'),
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        ['import', { libraryName: 'antd', style: 'css' }] // `style: true` 会加载 less 文件
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract('css-loader') // css打包。
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: require.resolve('url-loader'),
                query: {
                    limit: 10000, // 小于这个字节的图片会被打包成base64字符串。
                    name: 'images/[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    plugins: [
        extractTextPlugin, // 此插件的目的是将css单独打包成一个文件（不加的话css是会被打到js中的。）
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: 'src/index.html', // Load a custom template
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true, //为静态资源生成hash值
            // chunks: ['webpack-dev-server', 'index'] // 如果不指定这项，会把所有脚本都加载进来，指定了就只加载指定的脚本。
        }),
        // new CommonsChunkPlugin({
        //     names: ['antd','react']
        // })
    ]
}