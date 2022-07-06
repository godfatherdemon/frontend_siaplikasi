const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 8081
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-pro-sidebar/' : '/',
	chainWebpack: config => {
	//	process.env.NODE_ENV === 'production' ? config.externals(['@vue/composition-api']):{};
	},
	css: {
		extract: false,
	},
}