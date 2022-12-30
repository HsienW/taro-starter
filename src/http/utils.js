import Taro from '@tarojs/taro';

const pageToLogin = () => {
  Taro.navigateTo({
    url: '/pages/login/login'
  });
}

export {
  pageToLogin
}
