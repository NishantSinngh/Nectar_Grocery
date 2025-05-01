import { NativeSyntheticEvent, ReturnKeyTypeOptions, StyleSheet, Text, TextInput, TextInputSubmitEditingEventData, View } from 'react-native'
import React, { Ref, useState } from 'react'
import colors from '../constants/colors'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'

const TextInputWithLabel = ({
    reference,
    secure = false,
    label = '',
    placeholder = '',
    onSetData,
    disabled,
    returnType = 'done',
    error,
    onSubmitEditing,
}: {
    reference?: Ref<TextInput>
    secure?: boolean
    label: string,
    disabled: boolean,
    placeholder: string,
    onSetData?: any;
    returnType?: ReturnKeyTypeOptions
    error?: string;
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void
}) => {

    const [getShow, setShow] = useState(secure);
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View style={styles.conatiner}>
            <View style={styles.labelConatiner}>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    ref={reference}
                    placeholder={placeholder}
                    style={[[styles.inputStyle, isFocused && { borderBottomColor: colors.black }]]}
                    cursorColor={colors.grey}
                    placeholderTextColor={colors.grey}
                    secureTextEntry={getShow}
                    editable={disabled}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onChangeText={textIn => {
                        const trimmedText = textIn.replace(/^[\s]+/g, '');
                        const formattedText = trimmedText.replace(/[ ]+/g, ' ');
                        onSetData(formattedText);
                    }}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnType}
                />
                {secure && <ImageButton
                    imgSrc={getShow ? imagePath.eye_close : imagePath.eye_open}
                    imgStyle={{ right: 30, height: 24, width: 24, }}
                    onPress={() => setShow(!getShow)}
                />}
            </View>
            {!!error && <View style={styles.errorContainer}>
                <Text style={styles.error}>{error}</Text>
            </View>}
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
        paddingRight: 30,
        borderBottomColor: colors.grey1
    },
    errorContainer: {
        alignSelf: 'flex-start'
    },
    error: {
        color: 'red'
    }
})