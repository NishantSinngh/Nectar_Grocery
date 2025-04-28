import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationStrings from '../constants/NavigationStrings'
import BottomTabs from './BottomTabs'
import { ProductScreen, LoginScreen, SignupScreen } from '../Screens'



const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={NavigationStrings.LOGIN} screenOptions={{ headerShown: false, animation: 'ios_from_right' }}>
                <Stack.Screen name={NavigationStrings.BOTTOM_TABS} component={BottomTabs} />
                <Stack.Screen name={NavigationStrings.LOGIN} component={LoginScreen} />
                <Stack.Screen name={NavigationStrings.SIGNUP} component={SignupScreen} />
                <Stack.Screen options={{ presentation: 'containedTransparentModal' }} name={NavigationStrings.PRODUCT_SCREEN} component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack