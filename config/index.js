const config = {
  projectName: 'taro-starter',
  date: '2018-9-10',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'react',
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  plugins: ['@tarojs/plugin-html'],
  sass: {
    data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`
  },
  pxtransform: {
    config: {
      selectorBlackList: ['nut-']
    }
  },
  weapp: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
    },
    compile: {},
    module: {},
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {},
    esnextModules: [],
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
