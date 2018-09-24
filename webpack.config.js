const path = require('path');

const entry = [
	'whatwg-fetch', './src/index.js'
];

const output = {
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/dist/',
	filename: 'bundle.js',
};

module.exports = {
	mode: 'production', 
	performance: { hints: false },
	entry, 
	output,
	devtool: 'eval-source-map',
	module: {
		rules : [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
		],
	},
};   