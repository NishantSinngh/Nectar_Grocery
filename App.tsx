import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import BootSplash from "react-native-bootsplash";
import { RootSiblingParent } from 'react-native-root-siblings'
import Routes from './src/Navigation/Routes'
import { onAuthStateChanged } from '@react-native-firebase/auth';
import { auth } from './src/helperFunctions/auth';
import { onSaveUserData } from './src/redux/actions/auth';
import actions from './src/redux/actions';
const App = () => {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {

    !initializing && BootSplash.hide({ fade: true });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await onSaveUserData({
          displayName: user?.displayName ?? null,
          email: user?.email ?? null,
          uid: user?.uid ?? null
        })
      } else {
        actions.userLogout()
      }
      if (initializing) setInitializing(false);
    })
    return unsubscribe;
  }, [initializing])
  

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