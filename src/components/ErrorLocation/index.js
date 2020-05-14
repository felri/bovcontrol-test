import React from 'react';
import { Image, TouchableOpacity, ActivityIndicator } from 'react-native'

import ErrorPng from 'src/assets/imgs/error.png'
import {
  Container,
  TextError,
  BtnError,
  TextBtn,
} from './styles'

function ErrorLocation({ errorLocation, onPress, loading }) {
  return (
    errorLocation ?
      <Container>
        <Image source={ErrorPng} style={{ width: 200, height: 200 }} />
        <TextError>Não foi possível usar sua localização</TextError>
        <TouchableOpacity onPress={onPress}>
          <BtnError>
            {
              loading ? <ActivityIndicator color="white" /> :
                <TextBtn>
                  Tentar novamente
                </TextBtn>
            }
          </BtnError>
        </TouchableOpacity>
      </Container> : null
  );
}

export default ErrorLocation;