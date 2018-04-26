import { observable, computed, action } from "mobx";
import nav from './../utils/default-nav.json';

export class UserStore {
  constructor(){
    this.todos = nav;
  }

  @observable todos = [];

  @action setTodo(list) {
    this.todos = list;
  }

  @action del() {
    this.todos.pop();
    console.log(this.todos);
  }
}

export default new UserStore();

