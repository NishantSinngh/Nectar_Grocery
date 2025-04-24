import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'

const TextInputWithLabel = () => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.labelConatiner}>
                <Text style={styles.labelText}>Label</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='placeholder'
                    style={[styles.inputStyle]}
                    cursorColor={colors.grey}
                    multiline

                />
                <ImageButton imgSrc={imagePath.eye_close} imgStyle={{ right: 30, height: 24, width: 24, }} onPress={() => console.log('kjsjhsjhshjsddhj')} />
            </View>
        </View>
    )
}

export default TextInputWithLabel

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 15,

    },
    labelConatiner: {
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    labelText: {
        color: colors.grey,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    inputStyle: {
        width: '100%',
        alignSelf: 'flex-start',
        // backgroundColor: 'red',
        borderBottomWidth: 1,
        paddingRight:30,
        borderBottomColor: colors.grey1
    }
})