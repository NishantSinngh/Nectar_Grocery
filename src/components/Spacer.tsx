import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = React.memo(({
    space = 10,
}: {
    space?: number,
}) => {
    return (
        <View style={{ height: space }} />
    )
})

export default Spacer

const styles = StyleSheet.create({})