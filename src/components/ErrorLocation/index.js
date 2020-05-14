import React from 'react';
import {
  Container
} from './styles'

function WeatherError({ errorLocation }) {
  return (
    errorLocation ?
      <Container /> : null
  );
}

export default WeatherError;