import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import ImageButton from "./ImageButton";
import imagePath from "../assets/imagePath";


export default function ItemComponent({
    item,
    index
}: {
    item: { path: any, title: string, price: number, quantity: number },
    index: number
}) {

    return (
        <View style={styles.container}>
            <Image source={item.path} style={styles.imageStyle} />
            <View style={{ marginTop: 20, marginHorizontal: 10, }}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <Text style={styles.quantityText}>{item?.quantity}Kg</Text>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>₹{item?.price}</Text>
                <ImageButton imgSrc={imagePath.add} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 220,
        width: 150,
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: colors.grey1,
        borderRadius: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    imageStyle: {
        height: 70,
        width: 90,
        marginTop: 20,
        alignSelf: 'center'
    },
    titleText: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'left'
    },
    quantityText: {
        color: colors.grey,
        fontSize: 14,
        textAlign: 'left'
    },
    footer: {
        width: "89%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
    }
})
