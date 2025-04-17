import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";
import ImageButton from "./ImageButton";
import imagePath from "../assets/imagePath";
import React from "react";
import colors from "../constants/colors";
import { height } from "../helperFunctions/utils";


const CostComponent = React.memo(({
    onBack,
    cost,
}: {
    cost: Number;
    onBack: () => void;
}) => (
    <Animated.View
        entering={FadeInRight}
        exiting={FadeOutRight}
        style={[StyleSheet.absoluteFillObject, styles.secondScreen]}
    >
        <View style={styles.innerViewHeader}>
            <ImageButton
                imgSrc={imagePath.back}
                imgStyle={{ marginRight: 20 }}
                onPress={onBack} />
            <Text style={styles.innerViewHeaderText}>Cost</Text>
        </View>
    </Animated.View>
));

export default CostComponent

const styles = StyleSheet.create({
    innerViewHeaderText: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.black,
    },
    secondScreen: {
        backgroundColor: colors.white,
        zIndex: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: height * 0.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 60,
    },
    innerViewHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 40,
    },
    payText: {
        fontSize: 18,
        fontWeight: '600'
    },
})