const path = require('path')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://zhucheng.api.qixianlv.cn/zhucheng`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        'assets': path.resolve('public/assets'),
      }
    }
  },
};
