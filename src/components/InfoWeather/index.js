import React from 'react';
import Map from 'src/components/Map'
import Chart from 'src/components/Chart'
import DetailsTemp from 'src/components/DetailsTemp'
import {
  Container,
  ContainerTitleCity,
  TextTitleCity,
} from './styles'

const TitleCity = ({ title }) => (
  <ContainerTitleCity>
    <TextTitleCity>
      {title}
    </TextTitleCity>
  </ContainerTitleCity>
)

function InfoWeather({ weather }) {
  return (
    weather && weather.city ?
      <Container>
        <Container>
          <TitleCity title={weather.city} />
          <DetailsTemp info={weather.arrayWeather} />
          <Chart info={weather.arrayWeather} />
        </Container>
        <Map location={weather.location} />
      </Container> : null
  );
}

export default InfoWeather;