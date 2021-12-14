const { RESTDataSource } = require("apollo-datasource-rest");

//* Should be in a .env file
const key = "d74895cbc352ffdb395938590bc15b01";

exports.WeatherApi = class WeatherApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  }

  //* Get Request to Weather API
  async getWeather(city) {
    return this.get(`/`, {
      units: "imperial",
      q: city,
      appid: key,
    }).then((data) => {
      return {
        ...data,
        icon:
          data.weather.length > 0
            ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            : "",
      };
    });
  }
};
