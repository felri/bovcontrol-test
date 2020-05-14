import React from 'react';

//REDUX STUFF
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'src/redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';

//SCREENS
import Home from 'src/screens/Home'

import { AsyncStorage, StatusBar } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weather']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
)

let persistor = persistStore(store)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#f1faff" barStyle="dark-content" />
        <Home />
      </PersistGate>
    </Provider>
  );
}
