/**
 webpack 开发环境配置
 **/

'use strict';

import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';

/**
 域名
 协议、主机、端口
**/
const protocol = 'http';
const host = 'localhost';
const port = process.env.PORT || 8080;
const domain = protocol + '://' + host + ':' + port;

const devWebpackConfig = Object.assign({}, webpackConfig);

// 设置自动刷新 socket js
devWebpackConfig.entry.app.unshift('webpack-dev-server/client?' + domain);

// 设置打包最后的文件
devWebpackConfig.output.filename = 'bundle.js';

// 设置静态资源目录替换
devWebpackConfig.output.publicPath = domain + '/';

// 设置断点调试
devWebpackConfig.debug = true;
devWebpackConfig.devtool = '#eval-source-map';

// 热替换和自动刷新
devWebpackConfig.devServer = {
	hot: true,
  inline: true
};

/*// eslint 检测代码规范
devWebpackConfig
	.module
	.preLoaders
	.push({
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'eslint'
	});
devWebpackConfig.eslint = { configFile: '../.eslint.js' };*/
//console.log(devWebpackConfig);

(new WebpackDevServer(
  webpack(devWebpackConfig),
	{
		stats: {
			colors: true
		}
	}
)).listen(port, host, () => {
	console.log('webpack dev is root');
});
/*webpack(devWebpackConfig, () => {
  console.log('wjj');
});*/
