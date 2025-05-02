import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

type Props = {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  icon: string;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  clouds: number;
  sunrise: number;
  sunset: number;
};

const WeatherCard: React.FC<Props> = ({
  city,
  country,
  temperature,
  condition,
  icon,
  feels_like,
  temp_min,
  temp_max,
  humidity,
  pressure,
  wind_speed,
  clouds,
  sunrise,
  sunset,
}) => {
  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <View style={styles.card}>
      <Text style={styles.city}>
        {city}, <Text style={styles.country}>{country}</Text>
      </Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }}
        style={styles.icon}
      />
      <Text style={styles.temp}>{Math.round(temperature)}°C</Text>
      <Text style={styles.condition}>{condition}</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Feels Like</Text>
          <Text style={styles.value}>{Math.round(feels_like)}°C</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Min / Max</Text>
          <Text style={styles.value}>
            {Math.round(temp_min)}° / {Math.round(temp_max)}°
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Humidity</Text>
          <Text style={styles.value}>{humidity}%</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Pressure</Text>
          <Text style={styles.value}>{pressure} hPa</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Wind Speed</Text>
          <Text style={styles.value}>{wind_speed} m/s</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Cloudiness</Text>
          <Text style={styles.value}>{clouds}%</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Sunrise</Text>
          <Text style={styles.value}>{formatTime(sunrise)} 🌅</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Sunset</Text>
          <Text style={styles.value}>{formatTime(sunset)} 🌇</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
