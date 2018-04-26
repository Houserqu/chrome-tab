import {observable, action} from "mobx";
import {getWeather, getCity} from '../service/weather';

export class WeatherStore {

  @observable location = {
    city: '罗田县'
  }

  @observable citys = []
  @observable weather = {
    "city": "北京",
    "cityid": "1",
    "citycode": "101010100",
    "date": "2018-02-02",
    "week": "星期五",
    "weather": "晴",
    "temp": "-1",
    "temphigh": "-1",
    "templow": "-9",
    "img": "0",
    "humidity": "14%",
    "pressure": "1033",
    "windspeed": "9.8",
    "winddirect": "西北风",
    "windpower": "3级",
    "updatetime": "2018-02-02 16:35",
    "index": [{"iname": "空调指数", "ivalue": "开启制暖空调", "detail": "您将感到有些冷，可以适当开启制暖空调调节室内温度，以免着凉感冒。"}, {
      "iname": "运动指数",
      "ivalue": "较不宜",
      "detail": "天气较好，但考虑天气寒冷，风力较强，推荐您进行室内运动，若户外运动请注意保暖并做好准备活动。"
    }, {"iname": "紫外线指数", "ivalue": "弱", "detail": "紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"}, {
      "iname": "感冒指数",
      "ivalue": "极易发",
      "detail": "将有一次强降温过程，天气寒冷，极易发生感冒，请特别注意增加衣服保暖防寒。"
    }, {"iname": "洗车指数", "ivalue": "较适宜", "detail": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"}, {
      "iname": "空气污染扩散指数",
      "ivalue": "良",
      "detail": "气象条件有利于空气污染物稀释、扩散和清除，可在室外正常活动。"
    }, {"iname": "穿衣指数", "ivalue": "寒冷", "detail": "天气寒冷，建议着厚羽绒服、毛皮大衣加厚毛衣等隆冬服装。年老体弱者尤其要注意保暖防冻。"}],
    "aqi": {
      "so2": "5",
      "so224": "5",
      "no2": "8",
      "no224": "12",
      "co": "0.310",
      "co24": "0.350",
      "o3": "77",
      "o38": "73",
      "o324": "74",
      "pm10": "32",
      "pm1024": "40",
      "pm2_5": "7",
      "pm2_524": "10",
      "iso2": "2",
      "ino2": "5",
      "ico": "4",
      "io3": "25",
      "io38": "37",
      "ipm10": "32",
      "ipm2_5": "10",
      "aqi": "37",
      "primarypollutant": "O3",
      "quality": "优",
      "timepoint": "2018-02-02 16:00:00",
      "aqiinfo": {"level": "一级", "color": "#00e400", "affect": "空气质量令人满意，基本无空气污染", "measure": "各类人群可正常活动"}
    },
    "daily": [{
      "date": "2018-02-02",
      "week": "星期五",
      "sunrise": "07:21",
      "sunset": "17:34",
      "night": {"weather": "晴", "templow": "-9", "img": "0", "winddirect": "", "windpower": ""},
      "day": {"weather": "晴", "temphigh": "-1", "img": "0", "winddirect": "北风", "windpower": "3～4级"}
    }, {
      "date": "2018-02-03",
      "week": "星期六",
      "sunrise": "07:20",
      "sunset": "17:35",
      "night": {"weather": "多云", "templow": "-9", "img": "1", "winddirect": "", "windpower": ""},
      "day": {"weather": "多云", "temphigh": "0", "img": "1", "winddirect": "北风", "windpower": "小于3级"}
    }, {
      "date": "2018-02-04",
      "week": "星期日",
      "sunrise": "07:19",
      "sunset": "17:36",
      "night": {"weather": "晴", "templow": "-8", "img": "0", "winddirect": "", "windpower": ""},
      "day": {"weather": "晴", "temphigh": "1", "img": "0", "winddirect": "西南风", "windpower": "小于3级"}
    }, {
      "date": "2018-02-05",
      "week": "星期一",
      "sunrise": "07:18",
      "sunset": "17:37",
      "night": {"weather": "晴", "templow": "-10", "img": "0", "winddirect": "", "windpower": ""},
      "day": {"weather": "晴", "temphigh": "0", "img": "0", "winddirect": "北风", "windpower": "小于3级"}
    }, {
      "date": "2018-02-06",
      "week": "星期二",
      "sunrise": "07:17",
      "sunset": "17:39",
      "night": {"weather": "晴", "templow": "-8", "img": "0", "winddirect": "", "windpower": ""},
      "day": {"weather": "晴", "temphigh": "2", "img": "0", "winddirect": "西风", "windpower": "小于3级"}
    }, {
      "date": "2018-02-07",
      "week": "星期三",
      "sunrise": "07:16",
      "sunset": "17:40",
      "night": {"weather": "多云", "templow": "-8", "img": "1", "winddirect": "", "windpower": ""},
      "day": {"weather": "晴", "temphigh": "3", "img": "0", "winddirect": "西北风", "windpower": "小于3级"}
    }, {
      "date": "2018-02-08",
      "week": "星期四",
      "sunrise": "07:15",
      "sunset": "17:41",
      "night": {"weather": "局部多云", "templow": "-7", "img": "1", "winddirect": "", "windpower": ""},
      "day": {"weather": "少云", "temphigh": "4", "img": "1", "winddirect": "西南偏西风", "windpower": "3级"}
    }, {
      "date": "2018-02-09",
      "week": "星期五",
      "sunrise": "07:14",
      "sunset": "17:42",
      "night": {"weather": "少云", "templow": "-6", "img": "1", "winddirect": "", "windpower": ""},
      "day": {"weather": "局部多云", "temphigh": "4", "img": "1", "winddirect": "西北风", "windpower": "2级"}
    }, {
      "date": "2018-02-10",
      "week": "星期六",
      "sunrise": "07:13",
      "sunset": "17:43",
      "night": {"weather": "少云", "templow": "-6", "img": "1", "winddirect": "", "windpower": ""},
      "day": {"weather": "晴", "temphigh": "6", "img": "0", "winddirect": "西北风", "windpower": "3级"}
    }, {
      "date": "2018-02-11",
      "week": "星期日",
      "sunrise": "07:12",
      "sunset": "17:45",
      "night": {"weather": "局部多云", "templow": "-6", "img": "1", "winddirect": "", "windpower": ""},
      "day": {"weather": "少云", "temphigh": "6", "img": "1", "winddirect": "西北风", "windpower": "3级"}
    }],
    "hourly": [{"time": "17:00", "weather": "晴", "temp": "-2", "img": "0"}, {
      "time": "18:00",
      "weather": "晴",
      "temp": "-3",
      "img": "0"
    }, {"time": "19:00", "weather": "晴", "temp": "-4", "img": "0"}, {
      "time": "20:00",
      "weather": "晴",
      "temp": "-5",
      "img": "0"
    }, {"time": "21:00", "weather": "晴", "temp": "-6", "img": "0"}, {
      "time": "22:00",
      "weather": "晴",
      "temp": "-6",
      "img": "0"
    }, {"time": "23:00", "weather": "晴", "temp": "-7", "img": "0"}, {
      "time": "0:00",
      "weather": "晴",
      "temp": "-7",
      "img": "0"
    }, {"time": "1:00", "weather": "晴", "temp": "-7", "img": "0"}, {
      "time": "2:00",
      "weather": "晴",
      "temp": "-8",
      "img": "0"
    }, {"time": "3:00", "weather": "晴", "temp": "-8", "img": "0"}, {
      "time": "4:00",
      "weather": "晴",
      "temp": "-8",
      "img": "0"
    }, {"time": "5:00", "weather": "晴", "temp": "-9", "img": "0"}, {
      "time": "6:00",
      "weather": "晴",
      "temp": "-9",
      "img": "0"
    }, {"time": "7:00", "weather": "晴", "temp": "-9", "img": "0"}, {
      "time": "8:00",
      "weather": "晴",
      "temp": "-9",
      "img": "0"
    }, {"time": "9:00", "weather": "晴", "temp": "-6", "img": "0"}, {
      "time": "10:00",
      "weather": "晴",
      "temp": "-4",
      "img": "0"
    }, {"time": "11:00", "weather": "晴", "temp": "-3", "img": "0"}, {
      "time": "12:00",
      "weather": "晴",
      "temp": "-2",
      "img": "0"
    }, {"time": "13:00", "weather": "晴", "temp": "-1", "img": "0"}, {
      "time": "14:00",
      "weather": "晴",
      "temp": "0",
      "img": "0"
    }, {"time": "15:00", "weather": "晴", "temp": "0", "img": "0"}, {
      "time": "16:00",
      "weather": "局部多云",
      "temp": "0",
      "img": "1"
    }]
  };

  @action fetchWeather() {
    getWeather({cityid: 1566}).then(data => {
      console.log(data);
      this.weather = data.result;
    }).catch(e => {
      console.log(e)
    })
  }

  @action fetchCity() {
    getCity().then(data => {
      console.log(data);
      this.citys = data.result;
    }).catch(e => {
      console.log(e)
    })
  }
}

export default new WeatherStore();

