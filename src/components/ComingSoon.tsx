import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const ComingSoon = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>
            <Text style={{ fontSize: 30 }}>Coming Soon</Text>
        </View>
    )
}

export default ComingSoon

const styles = StyleSheet.create({})