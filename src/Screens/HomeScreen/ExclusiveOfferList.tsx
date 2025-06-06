import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ItemComponent from '../../components/ItemComponent'
import DATA from '../../constants/DATA'
import actions from '../../redux/actions'

const ExclusiveOfferList = () => {


    return (
        <View style={{ marginLeft: 10, }} key={1}>
            <ScrollView horizontal>
                {DATA.Fruits.map((item, index) => (
                    <ItemComponent
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default ExclusiveOfferList

const styles = StyleSheet.create({})