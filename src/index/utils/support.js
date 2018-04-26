export function urlParams(url, params) {
  // json 序列化
  if (params) {
    const paramsArray = [];
    // encodeURIComponent
    Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`));

    url += paramsArray.join('&');
  }

  return url;
}
