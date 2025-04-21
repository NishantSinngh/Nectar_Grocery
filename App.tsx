import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { SettingScreen } from './src/Screens'
import MainStack from './src/Navigation/MainStack'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import BootSplash from "react-native-bootsplash";
const App = () => {

  useEffect(()=>{
    BootSplash.hide({ fade: true });
  },[])

  return (
    <Provider store={store}>
      <MainStack />
      <StatusBar translucent backgroundColor={"transparent"} barStyle={'dark-content'} />
    </Provider>
  )
}

export default App