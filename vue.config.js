const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },
  configureWebpack:{
    module:{
      rules:[
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        }
      ]
    }
  },
  publicPath: './',
  outputDir:'dist',
  assetsDir:'static'
})
