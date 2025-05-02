import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchWeather } from '../redux/weather/actions';
import { RootState, AppDispatch } from '../redux/store';

export const useWeather = () => {
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state.weather);

  const getWeather = (city: string) => {
    dispatch(fetchWeather(city));
  };

  useEffect(() => {
    const loadLastCity = async () => {
      try {
        const lastCity = await AsyncStorage.getItem('lastCity');
        if (lastCity) {
          dispatch(fetchWeather(lastCity));
        }
      } catch (err) {
        console.error('Error loading last city:', err);
      }
    };
    loadLastCity();
  }, [dispatch]);

  return { weather, getWeather };
};
