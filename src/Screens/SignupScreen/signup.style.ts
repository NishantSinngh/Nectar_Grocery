import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { height } from "../../helperFunctions/utils";

export default StyleSheet.create({
    topBG: {
        position: 'absolute',
        top: 0,
        height: height * 1.2,
        width: '100%'
    },
    headerContainer: {
        marginHorizontal: 20,
    },
    loginText: {
        fontSize: 26,
        fontWeight: '500'
    },
    text2: {
        marginTop: 5,
        color: colors.grey
    },
    fpContainer: {
        marginHorizontal: 20,
    },
    fpText: {
        fontWeight: '400',
        color: colors.grey
    },
    button: {
        position: 'relative',
        top: 30,
    },
    footerContainer: {
        flexDirection: 'row',
        position: 'relative',
        top: 60,
        alignSelf: 'center'
    },
    signupText: {
        color: colors.themeColor,
        fontWeight: '500'
    },
    footerText: {
        fontWeight: '500'
    }
})