import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import colors from '../constants/colors';
import Animated, {
  FadeInDown,
  FadeOutDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';

const ButtonComp = React.memo(({
  title,
  price,
  onPress,
  mainViewStyle,
  isAnimated,
  loading,
}: {
  title: string;
  price?: number;
  onPress?: () => void;
  mainViewStyle?: StyleProp<ViewStyle>;
  isAnimated?: boolean;
  loading?: boolean;
}) => {

  const animatedValue = useSharedValue(0);
  const animatedWidth = useSharedValue(300);
  const animatedRadius = useSharedValue(18);

  useEffect(() => {
    animatedValue.value = withRepeat(
      withTiming(1, { duration: 5000 }),
      -1,
      false
    );
  }, []);

  const shineStyle = useAnimatedStyle(() => {
    const translateX = interpolate(animatedValue.value, [0, 1], [-300, 300]);
    return {
      transform: [{ translateX }, { rotate: '25deg' }],
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: animatedRadius.value
    };
  });
  useEffect(() => {
    if (isAnimated) {
      if (loading) {
        animatedWidth.value = withTiming(60, { duration: 300 });
        animatedRadius.value = withTiming(30, { duration: 300 });
      } else {
        animatedWidth.value = withSpring(300);
        animatedRadius.value = withTiming(18, { duration: 300 });
      }
    }
  }, [loading, isAnimated]);

  function handlePress() {
    onPress && onPress()
  }

  return (
    <Animated.View entering={FadeInDown.springify()} exiting={FadeOutDown} style={[styles.buttonContainer, mainViewStyle, isAnimated && animatedStyle]}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: colors.ripple }}
        style={styles.button}
        disabled={loading}
      >
        <Animated.View style={[styles.shinyEffect, shineStyle]} />
        {loading ? (
          <ActivityIndicator size={40} color={colors.buttonText} />
        ) : (
          <>
            <Animated.Text entering={ZoomIn} style={styles.titleStyle}>{title ?? 'Button'}</Animated.Text>
            {typeof price === 'number' && (
              <View style={styles.priceTextContainer}>
                <Text style={styles.priceText}>₹{price}</Text>
              </View>
            )}
          </>
        )}
      </Pressable>
    </Animated.View>
  );
})

export default ButtonComp;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 300,
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
