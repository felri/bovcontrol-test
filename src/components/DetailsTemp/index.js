import React from 'react';
import {
  Container
} from './styles'

function DetailsTemp({ weatherError }) {
  return (
    weatherError ?
      <Container /> : null
  );
}

export default DetailsTemp;