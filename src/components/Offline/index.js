import React from 'react';
import {
  Container,
  Text
} from './styles'

function Offline({ offline }) {
  return (
    offline ?
      <Container>
        <Text>
          Offline
        </Text>
      </Container> : null
  );
}

export default Offline;