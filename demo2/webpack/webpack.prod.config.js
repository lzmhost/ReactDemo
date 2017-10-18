const config = require('./webpack.config.js');
const path = require('path');

// 生产环境要将代码编译至java项目。
config.output.path = path.join('C:', 'workbench', 'temp', 'react');

// 资源压缩。
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));

// 去除React属性检查代码。
config.module.loaders[0].query.plugins.push("transform-react-remove-prop-types");

module.exports = config;