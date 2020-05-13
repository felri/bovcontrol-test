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

import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

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
        <View style={styles.container}>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
