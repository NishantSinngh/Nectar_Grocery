import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SettingScreen from './src/Screens/SettingsScreen/SettingScreen'
import { SettingsScreen } from './src/Screens'

const App = () => {
  return (
    <View style={{flex:1}}>
      <SettingsScreen />
    </View>
  )
}

export default App