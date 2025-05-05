import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import imagePath from '../assets/imagePath'

const SearchBar = React.memo(({placeholder= 'Search'}:{placeholder:string}) => {
    return (
        <View style={styles.inputContainer} >
            <Image source={imagePath.search} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.grey}
                style={styles.inputStyle}
            />
        </View>
    )
})

export default SearchBar

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: colors.grey2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 4,
        paddingHorizontal: 18,
        marginHorizontal: 18,
        borderRadius: 10,
        marginVertical: 6,
    },
    inputStyle: {
        flex: 1,
        color: colors.grey
    }
})