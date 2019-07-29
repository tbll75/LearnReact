import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlexTest from './Components/FlexTest.js'
import Navigation from './Navigation/Navigation.js'
import { Provider } from  'react-redux'
import Store from './Store/configureStore'

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
}

