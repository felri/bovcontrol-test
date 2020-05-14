import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { getWeather } from 'src/utils/useApi'
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/redux/weather/types'
import {
  Container,
  ContainerLoading
} from './styles'

//components
import WeatherError from 'src/components/WeatherError'
import ErrorLocation from 'src/components/ErrorLocation'
import Offline from 'src/components/Offline'
import InfoWeather from 'src/components/InfoWeather'

const Loading = ({ loading }) => (
  loading ?
    <ContainerLoading>
      <ActivityIndicator color="white" size="large" />
    </ContainerLoading> : null
)

function Home(props) {
  const [errorLocation, setErrorLocation] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [offline, setOffline] = React.useState(false)

  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.data);
  const weatherError = useSelector(state => state.weather.error);

  const checkIfLocationExists = ({ location }) => location && location.coords && location.coords.latitude && location.coords.longitude

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      setErrorLocation(true)
    }

    let location = await Location.getCurrentPositionAsync({})

    if (checkIfLocationExists({ location })) {
      setErrorLocation(false)
      const data = await getWeather({ lat: location.coords.latitude, long: location.coords.longitude })
      data ? dispatch({ type: actions.FETCH_WEATHER, payload: data }) : dispatch({ type: actions.FETCH_WEATHER_FAILED })
      setLoading(false)
    }
  }

  const checkInternetConnection = async () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        getLocation()
        setOffline(false)
      }
      else {
        checkRedux()
        setOffline(true)
      }
    });
  }

  const checkRedux = () => {
    //check if weather exists already in redux
    if (!weather || !weather.city) dispatch({ type: actions.FETCH_WEATHER_FAILED })
  }

  React.useEffect(() => {
    checkInternetConnection()
  }, [])

  return (
    <Container>
      <WeatherError weatherError={weatherError} />
      <ErrorLocation errorLocation={errorLocation} />
      <InfoWeather weather={weather} />
      <Loading loading={loading} />
      <Offline offline={offline} />
    </Container>
  )
}

export default Home;