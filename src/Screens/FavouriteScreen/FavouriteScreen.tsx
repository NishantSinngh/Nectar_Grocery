import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavStyles from './FavStyles'
import AppHeader from '../../components/AppHeader'
import commonStyles from '../../helperFunctions/commonStyles'
import FavouriteItem from '../../components/FavouriteItem'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import ButtonComp from '../../components/ButtonComp'

const FavouriteScreen = () => {
    const DummyData = [
        {
            id: '1',
            name: 'Sprite Can',
            quantity: "300mL",
            price: "20",
            path: imagePath.sprite,

        },
        {
            id: '2',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: "20",
            path: imagePath.pepsi,

        },
        {
            id: '3',
            name: 'Apple & Grape Juice',
            quantity: "2L",
            price: "200",
            path: imagePath.apple_juice,

        },
        {
            id: '4',
            name: 'Coca Cola Can',
            quantity: "300mL",
            price: "20",
            path: imagePath.coke,

        },
        {
            id: '5',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: "20",
            path: imagePath.pepsi,

        },
        {
            id: '6',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: "20",
            path: imagePath.pepsi,

        },
        {
            id: '7',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: "20",
            path: imagePath.pepsi,

        },
    ]
    return (
        <>
            <View style={FavStyles.appContainer}>
                <AppHeader mainViewStyle={commonStyles.appHeader} title='Favourite' />
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                    <FlatList
                        scrollEnabled={false}
                        data={DummyData}
                        ListFooterComponent={<Spacer space={180} />}
                        ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: "50%" }}>
                            <Text style={{ fontSize: 24 }}>You have no favourites</Text>
                        </View>}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <FavouriteItem item={item} />}
                    />
                </ScrollView>
            </View>
            <ButtonComp title='Add All To Cart' />
        </>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})