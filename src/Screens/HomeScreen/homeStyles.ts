import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginBottom: 10,
    },
    locationText: {
        marginLeft: 4,
        textAlign: 'center',
        color: colors.darkGrey
    },
    offerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginHorizontal: 20,
    },
    headingText: {
        fontWeight: '800',
        fontSize: 24
    },
    seeAllText: {
        color: colors.themeColor,
        fontSize: 16
    }
})