import 'whatwg-fetch';
import {urlParams} from "../utils/support";

export function getWeather(params) {
  let url = urlParams("http://jisutqybmf.market.alicloudapi.com/weather/query?", params);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
      headers : {
        "Authorization": "APPCODE 557d3e7aaf744971bca3ed75c7c0421f"
      },
    }).then((response) => {
      if(response.status == 200){
        return response.json()
      } else {
        reject(response.statusText);
      }
    }).then((responseData) => {
      resolve(responseData)
    }).catch((err) => {
      reject(err);
    });
  })
}

