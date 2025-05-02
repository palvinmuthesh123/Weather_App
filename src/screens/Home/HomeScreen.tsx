import React, { useContext, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  Switch,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useWeather } from '../../hooks/useWeather';
import WeatherCard from '../../components/WeatherCard';
import { ThemeContext } from '../../context/ThemeContext';
import { darkTheme } from '../../theme/themes';
import { styles, grey, grey60, buttonColor, darkGrey } from './styles'

const HomeScreen = () => {
  const [cityInput, setCityInput] = useState('');
  const { weather, getWeather } = useWeather();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [duration, setDuration] = useState(800)
  const [delay, setDelay] = useState(300)
  const [delay1, setDelay1] = useState(500)

  const handleFetch = () => {
    if (cityInput.trim()) getWeather(cityInput.trim());
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroller}>
      <StatusBar barStyle={theme === darkTheme ? 'light-content' : 'dark-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}
        >
          <Animatable.View animation="fadeInDown" duration={duration} style={styles.header}>
            <Text style={[styles.title, { color: theme.text }]}>🌤 Weather App</Text>
            <View style={styles.switchContainer}>
              <Text style={[styles.darkModeText, {color: theme.text}]}>Mode</Text>
              <Switch
                onValueChange={toggleTheme}
                value={theme === darkTheme}
                thumbColor={theme.switchThumb}
                trackColor={{ false: grey, true: darkGrey }}
              />
            </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" delay={delay} style={styles.form}>
            <TextInput
              placeholder="Enter city"
              placeholderTextColor={theme.placeholder || grey60}
              value={cityInput}
              onChangeText={setCityInput}
              style={[
                styles.input,
                {
                  backgroundColor: theme.input,
                  color: theme.text,
                  borderColor: theme.border || grey,
                },
              ]}
            />
            <Button title="Get Weather" onPress={handleFetch} color={theme.button || buttonColor} />
          </Animatable.View>

          {weather.loading && (
            <ActivityIndicator
              size="large"
              color={theme.text}
              style={styles.activity}
            />
          )}

          {weather.error && (
            <Animatable.Text
              animation="fadeIn"
              duration={delay1}
              style={[styles.error, { color: theme.error }]}
            >
              {weather.error}
            </Animatable.Text>
          )}

          {weather.city && !weather.loading && !weather.error && (
            <Animatable.View animation="fadeInUp" delay={delay1}>
              <WeatherCard
                city={weather.city}
                temperature={weather.temperature}
                condition={weather.condition}
                icon={weather.icon}
                country={weather.country}
                feels_like={weather.feels_like}
                temp_min={weather.temp_min}
                temp_max={weather.temp_max}
                humidity={weather.humidity}
                pressure={weather.pressure}
                wind_speed={weather.wind.speed}
                clouds={weather.clouds.all}
                sunrise={weather.sunrise}
                sunset={weather.sunset}
              />
            </Animatable.View>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;