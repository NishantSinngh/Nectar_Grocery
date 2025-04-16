import React, { useEffect } from 'react';
import { BackHandler, Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { useAppSelector } from '../redux/hooks';
import CheckOutModal from './CheckOutModal';
import actions from '../redux/actions';

const HIT_SLOP_PROP = {
    top: 10,
    right: 20,
    left: 20,
    bottom: 30,
};
const BottomTabCustom = React.memo((props: any) => {

    const isVisible = useAppSelector(state => state.checkOutSheet.isVisible)

    const { state, descriptors, navigation } = props;
    return (
        <>
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
                                <Pressable
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    testID={options.tabBarTestID}
                                    onPress={() => {
                                        onPress()
                                        Keyboard.dismiss()
                                    }}
                                    hitSlop={HIT_SLOP_PROP}
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
                                </Pressable>
                            </View>
                        );
                    })}
                </View>
            </View>
            {isVisible && <CheckOutModal isVisible={isVisible} onClose={() => actions.ToggleCheckoutSheet(false)} />}
        </>
    );
});

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
