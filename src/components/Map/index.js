import React from 'react';
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps';
import { Container } from './styles'

export default ({ location }) => {
  return (
    (location && location.lat && location.long) ?
      <Container>
        <MapView
          style={{
            width: Dimensions.get('window').width,
            height: '100%'
          }}
          liteMode
          initialRegion={{
            latitude: location.lat,
            longitude: location.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Container> : null
  )
}