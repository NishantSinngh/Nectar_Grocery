import { Button, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import exploreStyles from './exploreStyles'
import AppHeader from '../../components/AppHeader'
import ExploreItem from '../../components/ExploreItem'
import imagePath from '../../assets/imagePath'
import colors from '../../constants/colors'
import Spacer from '../../components/Spacer'
import SearchBar from '../../components/SearchBar'
import NavigationStrings from '../../constants/NavigationStrings'

const ExploreScreen = ({ navigation, routes }: { navigation: any, routes: any }) => {
    const DATA = [{
        id: '1',
        title: 'Fresh Fruits & Vegetables',
        path: imagePath.veggies_icon,
        BorderColor: colors.greenBorder,
        color: colors.greenOpacity,
    }, {
        id: '2',
        title: 'Cooking Oil & Ghee',
        path: imagePath.oil_icon,
        BorderColor: colors.orangeBorder,
        color: colors.orangeOpacity,
    }, {
        id: '3',
        title: 'Meat & Fish',
        path: imagePath.meat_icon,
        BorderColor: colors.redBorder,
        color: colors.redOpacity,
    }, {
        id: '4',
        title: 'Bakery & Snacks',
        path: imagePath.snacks_icon,
        BorderColor: colors.purpleBorder,
        color: colors.purpleOpacity,
    }, {
        id: '5',
        title: 'Dairy & Eggs',
        path: imagePath.dairy_icon,
        BorderColor: colors.yellowBorder,
        color: colors.yellowOpacity,
    }, {
        id: '6',
        title: 'Beverages',
        path: imagePath.beverages_icon,
        BorderColor: colors.blueBorder,
        color: colors.blueOpacity,
    },]



    function handleItemPress(index: number) {
        navigation.navigate(NavigationStrings.PRODUCT_SCREEN)
    }

    return (
            <View style={exploreStyles.appContainer}>
                <AppHeader mainViewStyle={{ paddingTop: 30, }} title='Find Products' />
                    <SearchBar />
                    <FlatList
                        data={DATA}
                        keyboardDismissMode='on-drag'
                        keyboardShouldPersistTaps='handled'
                        contentContainerStyle={{ flexGrow: 1, }}
                        ListFooterComponent={<Spacer space={120} />}
                        keyExtractor={(item)=> item.id}
                        style={{ flex: 1, }}
                        numColumns={2}
                        renderItem={({ item, index }) => <ExploreItem item={item} index={index} onPress={handleItemPress} />}
                    />
            </View>
    )
}

export default ExploreScreen
