import { observable, action } from "mobx";
import indexedDb from '../utils/indexedDb';
import { message } from 'antd';

export class UrlStore {
  constructor(){
    this.urls = [];
    this.category = []
  }

  @observable urls = [];
  @observable update_show = false;
  @observable update_data = {};

  @action setUrls(urls) {
    this.urls = urls;
  }

  @action setCategory(category) {
    this.category = [];
    category.map(item => {
      this.category.push(item.name);
    })
  }

  @action resetUrls() {
    indexedDb.getStore('url').then(v => this.setUrls(v));
  }

  @action resetCategory() {
    indexedDb.getStore('category').then(v => this.setCategory(v));
  }

  @action del(key) {
    indexedDb.delObject('url', key).then(e => {
      message.success(e.message);
      this.resetUrls();
    });
  }

  @action add(data) {
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
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

  @action addCategory(name) {
    console.log(name);
    indexedDb.addObject('category', name).then(result => {
      this.resetCategory();
    }).catch(e => {
      console.log(e);
    });
  }
}

export default new UrlStore();

