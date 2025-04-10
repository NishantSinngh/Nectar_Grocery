import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        justifyContent: 'flex-start',
        paddingBottom: 100,
    },
    headerContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 50,
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
        marginTop: 20,
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
    }
})