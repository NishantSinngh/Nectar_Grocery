import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';


const BottomTabCustom = (props: any) => {
    const { state, descriptors, navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.bottomTabContainer}>
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;
                    const tabIcon = options?.tabBarIcon;
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    return (
                        <View key={String(index)}>
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={[styles.touchContainer]}>
                                {tabIcon && tabIcon(isFocused)}

                                <Text
                                    numberOfLines={1}
                                    style={{
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        fontSize: 12,
                                        fontWeight: '600',
                                        color: isFocused ? colors.themeColor : colors.black,
                                        marginTop: 4,
                                    }}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default BottomTabCustom;

const styles = StyleSheet.create({
    bottomTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 65,
        backgroundColor: colors.white,
        alignItems: 'center',
        elevation: 4,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    container: {
        position: 'absolute',
        bottom: 18,
        width: '100%',
    },
    touchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
