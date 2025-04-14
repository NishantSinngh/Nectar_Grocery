import { Image, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import homeStyles from './homeStyles'
import SearchBar from '../../components/SearchBar'
import imagePath from '../../assets/imagePath'

const HomeScreen = () => {
    return (
        <Pressable style={{ flex: 1, }} onPress={() => Keyboard.dismiss()}>
            <View style={homeStyles.appContainer}>
                <View style={homeStyles.headerStyle}>
                    <Image source={imagePath.carrot} />
                    <View style={homeStyles.locationContainer}>
                        <Image source={imagePath.location} />
                        <Text style={homeStyles.locationText}>Location</Text>
                    </View>
                </View>
                <SearchBar />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Exclusive Offer</Text>
                    <Text style={homeStyles.seeAllText}>See all</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default HomeScreen
