import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
    },
    headerContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: colors.grey1,
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        width: 64,
        marginRight: 10,
    },
    profileDetails: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    userText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8,
    },
    mailText: {
        fontSize: 16,
        color: colors.grey
    },
    logOutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 18,
        backgroundColor: colors.grey2
    },
    logOutText: {
        fontSize: 18,
        color: colors.themeColor,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    sliderContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
})