const webpack = require('webpack');

module.exports = {
	entry: [
		// 'script!' is script-loader so webpack can use regular script files
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		//to remove './path' to our required files
		modules: [__dirname, 'node_modules'],
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.css'
		},
		//**end**
		extensions: ['.js', '.', '.jsx']
	},
	//add handler(babel-loader) JSX->ES5
	module: {
		loaders: [
			//loader 1:
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'env', 'es2016', 'stage-0'] //tell babel what to with code
				},
				//end of loader 1

				//tell to get jsx files:
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};