import React from 'react';
import NetInfo from '@react-native-community/netinfo';

import {
  Container
} from './styles'

function Home(props) {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permissão para acesso ao local negada!')
    }

    let location = await Location.getCurrentPositionAsync({})
    setLocation(location)
  }

  React.useEffect(() => {
    getLocation()
  }, [])

  return (
    <Container />
  );
}

export default Home;