import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import moment from 'moment'
import { Container, ContainerColors, ContainerColor, Color, TextColor } from './styles'

export default ({ info }) => {
  const [fromZero, setFromZero] = React.useState(true)
  return (
    <Container>
      <TouchableOpacity onPress={() => setFromZero(!fromZero)}>
        <LineChart
          // style={graphStyle}
          data={{
            labels: info.map(f => moment(f.applicable_date).format('DD/MM')),
            datasets: [
              { data: info.map(f => parseInt(f.the_temp)), color: (opacity = 1) => '#e26a00' },
              { data: info.map(f => parseInt(f.max_temp)), color: (opacity = 1) => '#b52430' },
              { data: info.map(f => parseInt(f.min_temp)), color: (opacity = 1) => '#2479b5' },
            ]
          }}
          width={Dimensions.get('window').width}
          height={220}
          fromZero={fromZero}
          yAxisSuffix="° C"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }} />
      </TouchableOpacity>
      <ContainerColors>
        <ContainerColor>
          <Color color={'#b52430'} />
          <TextColor>
            Máxima
          </TextColor>
        </ContainerColor>
        <ContainerColor>
          <Color color={'#e26a00'} />
          <TextColor>
            Média
          </TextColor>
        </ContainerColor>
        <ContainerColor>
          <Color color={'#2479b5'} />
          <TextColor>
            Mínima
          </TextColor>
        </ContainerColor>
      </ContainerColors>
    </Container>
  )
}