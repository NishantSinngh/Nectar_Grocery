import { StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import BootSplash from "react-native-bootsplash";
import { RootSiblingParent } from 'react-native-root-siblings'
import Routes from './src/Navigation/Routes'
const App = () => {

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, [])

  return (
    <RootSiblingParent>
      <Provider store={store}>
        <Routes />
        <StatusBar translucent backgroundColor={"transparent"} barStyle={'dark-content'} />
      </Provider>
    </RootSiblingParent>
  )
}

export default App