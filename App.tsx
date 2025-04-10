import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { SettingScreen } from './src/Screens'
import MainStack from './src/Navigation/MainStack'
const App = () => {
  return (
    <>
      <MainStack />
      <StatusBar translucent backgroundColor={"transparent"} barStyle={'dark-content'} />
    </>

  )
}

export default App