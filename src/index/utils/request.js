import 'whatwg-fetch';

/**
 * fetch.get请求封装
 */
export function get(url, params = '') {
  let paramsurl;
  if (params) {
    const paramsArray = [];
    // encodeURIComponent
    Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));
    if (url.search(/\?/) === -1) {
      url += `?${paramsArray.join('&')}`;
    } else {
      url += `&${paramsArray.join('&')}`;
    }

    paramsurl = Object.keys(params).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
    }).join('&')
  }

  return new Promise(((resolve, reject) => {
    fetch(url+paramsurl, {
      method: 'get',
    }).then((response) => {
      response.json();
    }).then((responseData) => {
        resolve(responseData);
    }).catch((err) => {
      reject(err);
    });
  }));
}
