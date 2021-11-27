import { Dimensions, Platform } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window'
);

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
