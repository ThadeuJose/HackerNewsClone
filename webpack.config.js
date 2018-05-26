const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
		mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
    	contentBase: './dist'
	  },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        },{
         	test: /\.css$/,
         	use: ['style-loader','css-loader']
       }]
    },    
    plugins: [
    	new VueLoaderPlugin()
  	]
};
