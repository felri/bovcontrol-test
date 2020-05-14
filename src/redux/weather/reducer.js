import actions from 'src/redux/weather/types';

export default (state = { data: {}, error: false, lastUpdate: new Date() }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.FETCH_WEATHER:
      newState.data = action.payload
      newState.error = false
      newState.lastUpdate = new Date()
      return newState
    case actions.FETCH_WEATHER_FAILED:
      newState.error = true
      return newState
    case actions.CLEAN_WEATHER:
      newState.data = {}
      newState.error = false
      return newState
    default:
      return state
  }
}