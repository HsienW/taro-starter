import Taro from '@tarojs/taro';
import {pageToLogin} from './utils';

const httpStatusMap = {
  400: '发出的请求有错误',
  401: '用户没有权限',
  403: '用户得到授权，但是访问是被禁止的',
  404: '请求的资源不存在',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除',
  500: '服务器发生错误，或用户登录已过期',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

const tokenStatusMap = {
  1000: '登录信息已过时，请重新登录',
  1001: '登录信息已失效，请重新登录', // token已失效，请重新登录
  1002: '登录信息不存在, 请重新登录', // token不存在
  1003: '登录信息不存在, 请重新登录', // token不存在
  1004: '手机号不存在, 请重新登录',
};

const customInterceptor = (chain) => {
  const requestParams = chain.requestParams;

  // 只要请求成功，不管返回什么状态码，都走这个回调
  return chain.proceed(requestParams).then(respond => {

    if (respond.statusCode === 401 || respond.statusCode === 403) {
      Taro.setStorageSync('Authorization', '');
      pageToLogin();
      return Promise.reject(httpStatusMap[respond.statusCode]);
    }

    if (httpStatusMap[respond.statusCode]) {
      return Promise.reject(httpStatusMap[respond.statusCode]);
    }

    // 接口返回 error
    if (respond.data.ok === false) {
      return Promise.reject(respond.data);
    }

    return respond.data;
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor];

export {
  interceptors
}
