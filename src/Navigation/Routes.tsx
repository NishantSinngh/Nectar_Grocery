
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import { useAppSelector } from '../redux/hooks'

const Stack = createNativeStackNavigator()
const Routes = () => {

    const userID = useAppSelector(state=> state.authSlice.userData?.uid)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'ios_from_right' }}>
                {!!userID ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Routes
