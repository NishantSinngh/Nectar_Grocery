import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { useEffect } from 'react';
import colors from '../constants/colors';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const ButtonComp = ({
  title,
  price,
  onPress,
  mainViewStyle,
}: {
  title: string;
  price?: number;
  onPress?: () => void
  mainViewStyle?: StyleProp<ViewStyle>;
}) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withRepeat(
      withTiming(1, { duration: 5000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 1], [-300, 300]);
    const rotate = '25deg';
    return {
      transform: [
        { translateX },
        { rotate },
      ],
    };
  });

  return (
    <View style={[styles.buttonContainer, mainViewStyle]}>
      <Pressable onPress={onPress} android_ripple={{ color: colors.ripple }} style={styles.button}>
        <Animated.View style={[styles.shinyEffect, animatedStyle]} />
        <Text style={styles.titleStyle}>{title ?? 'Button'}</Text>
        {price && (
          <View style={styles.priceTextContainer}>
            <Text style={styles.priceText}>₹{price}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 67,
    width: '90%',
    bottom: 100,
    backgroundColor: colors.themeColor,
    borderRadius: 18,
    overflow: 'hidden',
  },
  button: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    paddingRight: 20,
  },
  priceText: {
    backgroundColor: '#489E67',
    padding: 5,
    borderRadius: 4,
    fontSize: 12,
    color: colors.buttonText,
  },
  shinyEffect: {
    position: 'absolute',
    top: -50,
    bottom: -50,
    width: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
});
