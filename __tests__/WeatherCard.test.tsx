import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';

describe('WeatherCard', () => {
  it('renders correctly with given props', () => {
    const { getByText } = render(
      <WeatherCard city="Chennai" temperature={30} condition="Sunny" icon="01d" />
    );

    expect(getByText('Chennai')).toBeTruthy();
    expect(getByText('30°C')).toBeTruthy();
    expect(getByText('Sunny')).toBeTruthy();
  });
});