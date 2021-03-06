import React from 'react';
import { ActivityIndicator, Text, ImageBackground } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { getWeather } from 'src/utils/useApi'
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux'
import backgroundPng from 'src/assets/imgs/background.png'
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
    setLoading(true)
    try {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        setErrorLocation(true)
        setLoading(false)
      }

      let location = await Location.getCurrentPositionAsync({})

      if (checkIfLocationExists({ location })) {
        const data = await getWeather({ lat: location.coords.latitude, long: location.coords.longitude })
        data ? dispatch({ type: actions.FETCH_WEATHER, payload: data }) : dispatch({ type: actions.FETCH_WEATHER_FAILED })
        setErrorLocation(false)
        setLoading(false)
      }
    } catch (e) {
      setErrorLocation(true)
      setLoading(false)
    }
  }

  React.useEffect(() => {

    //verificar conexao com internet
    //caso tenha conexao, atualizar redux ----> getLocation()
    //caso offline, usar o que ja tem no redux ------> checkRedux()
    //caso redux vazio, apresentar tela de erro ------> weatherError
    //caso nao existir permissao de localizacao, apresentar tela de erro -----> errorLocation
    //obs: no iOS fica dificil requisitar a localizacao depois de negado pela primeira vez

    const unsubscribe = NetInfo.addEventListener((state) => {
      setLoading(true)
      if (state.isConnected) {
        getLocation()
        setOffline(false)
      }
      else {
        checkRedux()
        setOffline(true)
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const checkRedux = () => {
    //check if weather exists already in redux
    if (!weather || !weather.city) dispatch({ type: actions.FETCH_WEATHER_FAILED })
    setLoading(false)
  }

  return (
    <Container>
      <ImageBackground source={backgroundPng} style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}>
        <InfoWeather weather={weather} />
        <Loading loading={loading} />
        <Offline offline={offline} />
      </ImageBackground>
      <WeatherError weatherError={weatherError && (!weather || !weather.city)} onPress={getLocation} loading={loading} />
      <ErrorLocation errorLocation={errorLocation} onPress={getLocation} loading={loading} />
    </Container>
  )
}

export default Home;