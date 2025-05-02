export interface WeatherState {
  loading: boolean;
  error: string | null;
  city: string;
  coordinates: {
    lon: number;
    lat: number;
  };
  temperature: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  timestamp: number;
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  condition: string;
  description: string;
  icon: string;
}
  
export const initialState: WeatherState = {
  loading: false,
  error: null,
  city: '',
  coordinates: { lon: 0, lat: 0 },
  temperature: 0,
  feels_like: 0,
  temp_min: 0,
  temp_max: 0,
  pressure: 0,
  humidity: 0,
  visibility: 0,
  wind: { speed: 0, deg: 0 },
  clouds: { all: 0 },
  timestamp: 0,
  country: '',
  sunrise: 0,
  sunset: 0,
  timezone: 0,
  condition: '',
  description: '',
  icon: '',
};
  