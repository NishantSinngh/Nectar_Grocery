import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationStrings from '../constants/NavigationStrings'
import ComingSoon from '../components/ComingSoon'
import BottomTabs from './BottomTabs'



const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NavigationStrings.BOTTOM_TABS} component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack