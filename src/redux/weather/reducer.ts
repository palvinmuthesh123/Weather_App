import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherState, initialState } from './types';

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action: PayloadAction<Omit<WeatherState, 'loading' | 'error'>>) {
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.temperature = action.payload.temperature;
      state.condition = action.payload.condition;
      state.icon = action.payload.icon;
      state.feels_like = action.payload.feels_like;
      state.temp_min = action.payload.temp_min;
      state.temp_max = action.payload.temp_max;
      state.humidity = action.payload.humidity;
      state.pressure = action.payload.pressure;
      state.wind = action.payload.wind;
      state.clouds = action.payload.clouds;
      state.sunrise = action.payload.sunrise;
      state.sunset = action.payload.sunset;
      state.loading = false;
      state.error = null;
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} = weatherSlice.actions;

export default weatherSlice.reducer;
