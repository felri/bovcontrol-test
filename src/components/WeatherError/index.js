import React from 'react';
import {
  Container
} from './styles'

function WeatherError({ weatherError }) {
  return (
    weatherError ?
      <Container /> : null
  );
}

export default WeatherError;