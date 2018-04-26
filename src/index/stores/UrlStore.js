import { observable, action } from "mobx";
import indexedDb from '../utils/indexedDb';
import { message } from 'antd';

export class UrlStore {
  constructor(){
    this.urls = [];
  }

  @observable urls = [];
  @observable update_show = false;
  @observable update_data = {};

  @action setUrls(urls) {
    console.log(urls);
    this.urls = urls;
  }

  @action resetUrls() {
    indexedDb.getStore('url').then(v => this.setUrls(v));
  }

  @action del(key) {
    indexedDb.delObject('url', key).then(e => {
      message.success(e.message);
      this.resetUrls();
    });
  }

  @action add(data) {
    return new Promise((resolve, reject) => {
      //this.urls.push(data);
      indexedDb.addObject('url', data).then(result => {
        //console.log(this);
        this.resetUrls();
        resolve({code: 200, message: '添加成功', data: result});
      }).catch(e => {
        reject(e)
      })
    })
  }

  @action update(data, key) {
    console.log(data, key);

    return new Promise((resolve, reject) => {
      //this.urls.push(data);
      indexedDb.putObject('url', data, key).then(result => {
        this.resetUrls();
        resolve({code: 200, message: '更新成功', data: result});
      }).catch(e => {
        reject(e)
      })
    })
  }

  @action closeUpdateModal() {
    this.update_show = false;
  }

  @action showUpdate(data) {
    this.update_show = true;
    this.update_data = data;
  }
}

export default new UrlStore();

