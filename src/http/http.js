import Taro from '@tarojs/taro';
import {getBaseUrl} from './base-url';
import {interceptors} from './interceptors';

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

const httpRequest = {
  baseOptions(params, method = 'GET', header = {}) {
    let {url, data} = params;
    let baseUrl = getBaseUrl();
    let contentType = params.contentType || 'application/json';
    let option = {
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        ...header,
        'content-type': contentType,
        'token': Taro.getStorageSync('token'),
      }
    };

    return Taro.request(option);
  },

  get(url, data = '', header) {
    let option = {url, data};
    return this.baseOptions(option, 'GET', header);
  },

  post(url, data, header, contentType) {
    let params = {url, data, contentType};
    return this.baseOptions(params, 'POST', header);
  },

  put(url, data = '', header) {
    let option = {url, data};
    return this.baseOptions(option, 'PUT', header);
  },

  delete(url, data = '', header) {
    let option = {url, data};
    return this.baseOptions(option, 'DELETE', header);
  }

}

export {
  httpRequest
};

