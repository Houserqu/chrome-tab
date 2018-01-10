import { observable, computed, action } from "mobx";
import indexedDb from '../utils/indexedDb';

const urls = indexedDb.getStore('url');

export class UrlStore {
  constructor(){
    this.urls = [];
    this.show = true
  }

  @observable show = true;

  @action close(){
    console.log('close')
    this.show = false
  }

  @action operationUrl(actions){
    console.log(actions)
    this.show = true
  }

}

export default new UrlStore();

