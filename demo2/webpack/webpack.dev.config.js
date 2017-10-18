const config = require('./webpack.config.js');
const path = require('path');

// 开发环境使用本项目中的build目录最为编译目录。
config.output.path = path.resolve(__dirname, '../assets');

module.exports = config;