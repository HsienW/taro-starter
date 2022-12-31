const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  env: {
    NODE_ENV: '"production"',
    BASE_URL: '',
  },
  defineConstants: {},
  mini: {
    webpackChain(chain, webpack) {
      chain.plugin('terser-webpack-plugin')
        .use(TerserPlugin, [{
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        }])
    }
  },
  weapp: {},
  h5: {}
}
