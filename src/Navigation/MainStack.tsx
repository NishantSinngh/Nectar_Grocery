import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationStrings from '../constants/NavigationStrings'
import ComingSoon from '../components/ComingSoon'
import BottomTabs from './BottomTabs'
import { ProductScreen } from '../Screens'



const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation:'ios_from_right', }}>
                <Stack.Screen name={NavigationStrings.BOTTOM_TABS} component={BottomTabs} />
                <Stack.Screen name={NavigationStrings.PRODUCT_SCREEN} component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack