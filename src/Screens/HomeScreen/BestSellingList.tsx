import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ItemComponent from '../../components/ItemComponent'
import DATA from '../../constants/DATA'

const BestSellingList = () => {


    return (
        <View style={{ marginLeft: 10, }}>
            <ScrollView horizontal>
                {DATA.BestSelling.map((item, index) => (
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

export default BestSellingList

const styles = StyleSheet.create({})