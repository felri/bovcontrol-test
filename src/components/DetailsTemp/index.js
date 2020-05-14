import React from 'react';
import { Dimensions, Image } from 'react-native'
import { BASE_URL, ICON } from 'src/utils/env'
import Carousel from 'react-native-snap-carousel';
import moment from 'moment'

import {
  Container,
  ContainerTemp,
  ContainerInfo,
  TextItem,
  ContainerTextTemp,
  Label,
  ContainerDate,
  Date
} from './styles'

function DetailsTemp({ info }) {
  const carouselRef = React.useRef(null);

  const getDate = ({ item }) => {
    if (item && item.applicable_date &&
      moment(item.applicable_date).format('DD/MM') === moment().format('DD/MM')
    ) return 'Hoje'
    else return moment(item.applicable_date).format('DD/MM')
  }

  const renderItem = ({ item }) => {
    const URL_ICON = `${BASE_URL}${ICON}${item.weather_state_abbr}.png`
    return (
      <ContainerInfo>
        <ContainerDate>
          <Date>
            {getDate({ item })}
          </Date>
          <Image
            style={{
              width: 30,
              height: 30,
              marginTop: 5,
              marginLeft: 10
            }}
            source={{ uri: URL_ICON }}
          />
        </ContainerDate>
        <ContainerTemp>
          <ContainerTextTemp>
            <TextItem color="#b52430">
              {parseInt(item.max_temp)}° C
            </TextItem>
            <Label>
              Max
            </Label>
          </ContainerTextTemp>
          <ContainerTextTemp>
            <TextItem>
              {parseInt(item.the_temp)}° C
            </TextItem>
          </ContainerTextTemp>
          <ContainerTextTemp>
            <TextItem color="#2479b5">
              {parseInt(item.min_temp)}° C
            </TextItem>
            <Label>
              Min
            </Label>
          </ContainerTextTemp>
        </ContainerTemp>
      </ContainerInfo>
    );
  };


  return (
    info ?
      <Container>
        <Carousel
          ref={carouselRef}
          data={info}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 100}
        />
      </Container> : null
  );
}

export default DetailsTemp;