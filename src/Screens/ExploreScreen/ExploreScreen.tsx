import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import exploreStyles from './exploreStyles'
import AppHeader from '../../components/AppHeader'
import ExploreItem from '../../components/ExploreItem'

const ExploreScreen = () => {
    return (
        <View style={exploreStyles.appContainer}>
            <AppHeader mainViewStyle={{ padding: 30, }} title='Find Products' />
            <FlatList
                data={[1, 2]}
                contentContainerStyle={{ flexGrow: 1, }}
                style={{ flex: 1, }}
                numColumns={2}
                renderItem={() => <ExploreItem item={ } onPress={ } />}
            />
        </View>
    )
}

export default ExploreScreen
