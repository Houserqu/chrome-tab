import { observable, action } from "mobx";

export class UrlStore {
  constructor(){
    this.position = {
      x: 0,
      y: 0
    };
  }

  @observable show = false;
  @observable actions = null;
  @observable title = '操作';

  @action close(){
    this.show = false
  }

  @action operationUrl({ title, position, actions}){
    this.show = false;

    setTimeout(() => {
      this.position = position;
      this.show = true;
      this.actions = actions
      this.title = title
    }, 100)

  }

}

export default new UrlStore();

