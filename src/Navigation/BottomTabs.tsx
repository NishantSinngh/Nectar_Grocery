
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavigationStrings from '../constants/NavigationStrings'
import ComingSoon from '../components/ComingSoon'
import { SettingScreen } from '../Screens'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={NavigationStrings.SHOP} component={ComingSoon} />
            <Tab.Screen name={NavigationStrings.EXPLORE} component={ComingSoon} />
            <Tab.Screen name={NavigationStrings.CART} component={ComingSoon} />
            <Tab.Screen name={NavigationStrings.FAVOURITE} component={ComingSoon} />
            <Tab.Screen name={NavigationStrings.SETTINGS} component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabs