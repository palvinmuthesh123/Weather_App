import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch } from '../store';
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from './reducer';
import { fetchWeatherFromAPI } from '../../services/weatherService';

export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchWeatherStart());
    const data = await fetchWeatherFromAPI(city);

    await AsyncStorage.setItem('lastCity', city);

    dispatch(fetchWeatherSuccess({
      city: data.name,
      coordinates: data.coord,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      visibility: data.visibility,
      wind: data.wind,
      clouds: data.clouds,
      timestamp: data.dt,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      timezone: data.timezone,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    }));    
  } catch (error: any) {
    dispatch(fetchWeatherFailure('City not found!!!.'));
  }
};
