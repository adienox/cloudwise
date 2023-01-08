interface WeatherData {
  main: string;
  icon: string;
}
interface WeatherObject {
  coord: {
    lat: number;
    lon: number;
  };
  weather: WeatherData[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
  timezone: number;
}
interface ForecastDataList {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: WeatherData[];
  wind: {
    speed: number;
  };
  sys: {
    pod: string;
  };
}
interface ForecastData {
  list: ForecastDataList[];
}
interface Forecast {
  forecastDayFull: string;
  forecastDay: string;
  forecastTime: string;
  forecastTimeLocal: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  speed: number;
  detail: string;
  icon: string;
  pod: string;
}

interface Weather {
  forecast: Forecast[];
  lat: number;
  lon: number;
  detail: string;
  icon: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  speed: number;
  time: string;
  country: string;
  sunrise: string;
  sunset: string;
  name: string;
  timezone: number;
  updateTime: string;
}


export { WeatherObject, ForecastData, Weather, Forecast };
