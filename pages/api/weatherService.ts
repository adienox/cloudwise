import type { NextApiRequest, NextApiResponse } from "next";
import { ForecastData, WeatherObject } from "../../types/types";
import { DateTime } from "luxon";

const formatTime = (secs: number, format = "cccc, LLL dd") => {
  return DateTime.fromSeconds(secs).setZone("utc").toFormat(format);
};

const API_KEY = process.env.API_KEY;

const getData = async (infoType: string, searchParams: object) => {
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  }).toString();

  const checkFetch = (response: Response) => {
    if (!response.ok) {
      throw Error(response.statusText + " - " + response.url);
    }
    return response;
  };

  return await fetch(url)
    .then(checkFetch)
    .then((res) => res.json());
};

const formatWeatherData = (data: WeatherObject) => {
  const {
    coord: { lat, lon },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    dt,
    sys: { country, sunrise: sr, sunset: ss },
    name,
    timezone,
  } = data;

  const { main: detail, icon: symbol } = weather[0];
  const updateTime = formatTime(dt + timezone, "'Data Updated on: 'HH:mm");
  const sunrise = formatTime(sr + timezone, "HH:mm");
  const sunset = formatTime(ss + timezone, "HH:mm");
  const time = formatTime(dt + timezone);
  const icon = `https://openweathermap.org/img/wn/${symbol}@2x.png`;

  return {
    lat,
    lon,
    detail,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    time,
    country,
    sunrise,
    sunset,
    name,
    timezone,
    updateTime,
  };
};

const formatForecastData = (data: ForecastData, timezone: number) => {
  const { list } = data;

  const forecast = list.map((item) => {
    const {
      dt,
      main: { temp, temp_min, temp_max },
      weather,
      wind: { speed },
      sys: { pod },
    } = item;
    const { main: detail, icon: symbol } = weather[0];
    const forecastDayFull = formatTime(dt + timezone);
    const forecastDay = formatTime(dt + timezone, "ccc");
    const forecastTime = formatTime(dt, "HH:mm");
    const forecastTimeLocal = formatTime(dt + timezone, "HH:mm");
    const icon = `https://openweathermap.org/img/wn/${symbol}@2x.png`;

    return {
      forecastDayFull,
      forecastDay,
      forecastTime,
      forecastTimeLocal,
      temp,
      temp_min,
      temp_max,
      speed,
      detail,
      icon,
      pod,
    };
  });

  return { forecast };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let searchParams = req.query.q ? req.query : { ...req.query, q: "paris" };

  try {
    const weatherData = await getData("weather", searchParams).then(
      formatWeatherData
    );

    const forecastData = await getData("forecast", searchParams).then((data) =>
      formatForecastData(data, weatherData.timezone)
    );

    const data = { ...weatherData, ...forecastData };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
