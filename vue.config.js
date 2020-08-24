const path = require("path");
const merge = require("merge");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: './',
	devServer: {
		disableHostCheck: true
	},
	
	configureWebpack: {
		plugins: [
			new VuetifyLoaderPlugin()
		],
	},
  	chainWebpack: config => {
	
	    config.resolve.alias
	      .set("@", resolve("src"))
	      .set("assets", resolve("src/assets"))
	      .set("components", resolve("src/components"));

  	},
}
