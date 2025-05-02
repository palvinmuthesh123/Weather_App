import axios from 'axios';
import { OPEN_WEATHER_API_KEY } from '../config/apiConfig';

export const fetchWeatherFromAPI = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  );
  return response.data;
};
