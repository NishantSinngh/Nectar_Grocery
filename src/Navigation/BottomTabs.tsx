import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavigationStrings from '../constants/NavigationStrings'
import { CartScreen, ExploreScreen, FavoutiteScreen, HomeScreen, SettingScreen } from '../Screens'
import imagePath from '../assets/imagePath'
import { Image, View } from 'react-native'
import colors from '../constants/colors'
import BottomTabCustom from '../components/BottomTabCustom'
import React from 'react'
import { useAppSelector } from '../redux/hooks'

const Tab = createBottomTabNavigator()


const BottomTabs = React.memo(() => {
    const cart = useAppSelector(state => state.cartSlice)

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, animation: 'shift' }}
            backBehavior='initialRoute'
            initialRouteName={NavigationStrings.SHOP}
            tabBar={(props) => <BottomTabCustom {...props} />}
        >
            <Tab.Screen
                name={NavigationStrings.SHOP} component={HomeScreen}
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
                name={NavigationStrings.EXPLORE} component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 }, focused && { tintColor: colors.themeColor }]}
                            source={imagePath.explore}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.CART} component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: (focused) => (
                        <>
                            {cart.length > 0 && <View style={{ position: 'absolute', top: -8, alignSelf: 'center', padding: 4, backgroundColor: colors.themeColor, borderRadius: 30, }} />}
                            <Image
                                style={[{ height: 24, width: 24 }, focused && { tintColor: colors.themeColor }]}
                                source={imagePath.cart}
                            />
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.FAVOURITE} component={FavoutiteScreen}
                options={{
                    tabBarLabel: 'Favourite',
                    tabBarIcon: (focused) => (
                        <Image
                            style={[{ height: 24, width: 24 }, focused && { tintColor: colors.themeColor }]}
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
                            style={[{ height: 24, width: 24 }, focused && { tintColor: colors.themeColor }]}
                            source={imagePath.settings}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
})

export default BottomTabs