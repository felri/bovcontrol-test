import axios from 'axios'
import { BASE_URL, QUERY_LOCATION, LOCATION } from 'src/utils/env'

export const getWeather = async ({ lat, long }) => {
  try {
    const response = await axios.get(`${BASE_URL}${QUERY_LOCATION}${lat},${long}`)
    //check if exist results
    if (response.data.length > 0) return await getWeatherInfo({ id: response.data[0].woeid })
    else return undefined
  } catch (e) {
    console.log('getLocation error: ', e)
    return undefined
  }

}

export const getWeatherInfo = async ({ id }) => {
  try {
    const response = await axios.get(`${BASE_URL}${LOCATION}${id}`)
    //check if exist results
    if (response.data.title) {
      let location = response.data.latt_long.split(",")
      const weatherInfo = {
        city: response.data.title,
        arrayWeather: response.data.consolidated_weather,
        woeid: response.data.woeid,
        location: {
          lat: parseFloat(location[0]),
          long: parseFloat(location[1])
        }
      }
      return weatherInfo
    } else return undefined
  } catch (e) {
    console.log('getWeatherInfo error: ', e)
    return undefined
  }
}
