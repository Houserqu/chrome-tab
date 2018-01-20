import { observable, action } from "mobx";
import { getWeather } from '../service/weather';

export class WeatherStore {

  @observable weather = {};

  @action fetchWeather(){
    getWeather({cityid: 1}).then(data => {
      console.log(data);
      this.weather = data.result;
    }).catch(e => {
      console.log(e)
    })
  }

  @action del() {
    this.todos.pop();
    console.log(this.todos);
  }
}

export default new WeatherStore();

