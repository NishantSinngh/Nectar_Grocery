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
    button: {
        position: 'relative',
        top: 40,
    },
})