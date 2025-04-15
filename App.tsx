import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { SettingScreen } from './src/Screens'
import MainStack from './src/Navigation/MainStack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './src/redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
      <StatusBar translucent backgroundColor={"transparent"} barStyle={'dark-content'} />
    </Provider>
  )
}

export default App