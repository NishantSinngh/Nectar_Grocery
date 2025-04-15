import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ItemComponent from '../../components/ItemComponent'

const ExclusiveOfferList = () => {

    const DATA = [{
        id: '1',
        title: 'Organic Banana',
        quantity: 1,
        price: 40,
        path: imagePath.banana
    }, {
        id: '2',
        title: 'Red Apple',
        quantity: 1,
        price: 100,
        path: imagePath.apple
    }, {
        id: '3',
        title: 'Organic Banana',
        quantity: 1,
        price: 40,
        path: imagePath.banana
    },]


    return (
            <View style={{ marginLeft: 10, }}>
                <FlatList
                    data={DATA}
                    contentContainerStyle={{ flexGrow: 1, }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={ItemComponent}
                />
            </View>
    )
}

export default ExclusiveOfferList

const styles = StyleSheet.create({})