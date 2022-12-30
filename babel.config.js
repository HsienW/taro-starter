module.exports = {
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-react-taro",
        "libraryDirectory": "dist/esm",
        "style": true,
        "camel2DashComponentName": false
      },
      'nutui-react-taro'
    ]
  ],
  presets: [
    ['taro', {
      framework: 'react',
      ts: false
    }],
  ]
}
