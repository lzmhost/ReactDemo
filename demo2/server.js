const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack/webpack.dev.config.js');
const URL = require('url');
const host = 'localhost';
const port = 9090;

// 项目资源访问路径，打包后的js和css都是通过下面的地址引用的。
config.output.publicPath = '/assets/';

// 热替换脚本。这两个脚本必须和index打在一起，否则不生效。
config.entry.index.unshift('webpack-dev-server/client?http://' + host + ':' + port, 'webpack/hot/dev-server'); // 指定webpack-dev-server的host+port。

// 热替换插件。
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    hot: true,
    host: host,
    port: port,
    inline: true,
    stats: {
        colors: true
    },
    contentBase: '/',
    publicPath: config.output.publicPath
});

server.use('/api/*', function(req, res) {
    let baseUrl = req.baseUrl;
    baseUrl = baseUrl.replace('/api/', '/mock/');
    let data = require('./' + baseUrl + '.js');
    let dataJson = data();
    res.json(dataJson);
});

server.listen(9090);