export default {
  pages: [
    'pages/portal/portal',
    'pages/account/account',
  ],
  window: {
    backgroundColor: '#CACACA',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    selected: 0,
    color: '#000000',
    selectedColor: '#36B98D',
    list: [
      {
        pagePath: 'pages/portal/portal',
        text: '首页',
        selectedIconPath: 'assets/icons/home-2.png',
        iconPath: 'assets/icons/home-1.png',
      },
      {
        pagePath: 'pages/account/account',
        text: '我的',
        selectedIconPath: 'assets/icons/user-2.png',
        iconPath: 'assets/icons/user-1.png',
      }
    ]
  },
  subpackages: [
    {
      root: 'sub-package',
      pages: [
        'pages/sub-app1/sub-app1',
      ]
    }
  ],
  preloadRule: {
    'pages/portal/portal': {
      'network': 'all',
      'packages': [
        'sub-package',
      ]
    },
  }
}
