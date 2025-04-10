
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavigationStrings from '../constants/NavigationStrings'
import ComingSoon from '../components/ComingSoon'
import { SettingScreen } from '../Screens'
import imagePath from '../assets/imagePath'
import { Image } from 'react-native'
import colors from '../constants/colors'
import BottomTabCustom from '../components/BottomTabCustom'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            backBehavior='initialRoute'
            initialRouteName={NavigationStrings.SHOP}
            tabBar={(props) => <BottomTabCustom {...props} />}
        >
            <Tab.Screen
                name={NavigationStrings.SHOP} component={ComingSoon}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 }, focused && { tintColor: colors.themeColor }]}
                            source={imagePath.store}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.EXPLORE} component={ComingSoon}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 },focused && { tintColor: colors.themeColor }]}
                            source={imagePath.explore}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.CART} component={ComingSoon}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 },focused && { tintColor: colors.themeColor }]}
                            source={imagePath.cart}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.FAVOURITE} component={ComingSoon}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 },focused && { tintColor: colors.themeColor }]}
                            source={imagePath.favourite}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.SETTINGS} component={SettingScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 },focused && { tintColor: colors.themeColor }]}
                            source={imagePath.settings}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs