import Taro from '@tarojs/taro';

async function getWechatAuthChain() {
  // 清除舊有 Taro 缓存
  Taro.clearStorageSync();

  try {
    // 1.取临时登录凭证 code
    let loginRespond = Taro.login();

    if (!loginRespond.code) {
      return Promise.reject('error');
    }

    // 2.发送 loginRespond.code 到后台换取用戶 openId, sessionKey, unionId
    let wechatRespond = Taro.request(
      {
        url: '',
        data: {
          code: loginRespond.code
        }
      });

    let userInfo = wechatRespond.data.data;

    if (userInfo === null) {
      return Promise.reject('error');
    }

    // 3.把用戶數據存入 Taro
    Taro.setStorageSync('userInfo', userInfo);

    console.log(userInfo);

    // 4.登录验证拿 openid 换 AUTH_TICKET
    let authTicketRespond = Taro.request({
      method: 'post',
      url: '',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        openid: userInfo.openid,
        unionid: userInfo.unionid ? userInfo.unionid : '',
        phoneNo: ''
      }
    });

    // 5. 把用戶 AUTH_TICKET 存入Taro
    Taro.setStorageSync('authTicket', authTicketRespond.data.AUTH_TICKET)

    return {
      authTicketRespond
    }
  } catch (error) {
    return error;
  }
}

export {
  getWechatAuthChain
}
