export default class UrlStore {
  constructor(values){
    this.todos = values;
  }

  get() {
    console.log(this.todos);
  }
}
