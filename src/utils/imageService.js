import Feather from 'react-native-vector-icons/Feather';
import theme from '~/theme';

const SOURCE_PLATFORM = {
  feather: Feather,
};

export const getIconAsync = ({
  type,
  name,
  size = 24,
  color = theme.colors.primary,
}) => SOURCE_PLATFORM[type].getImageSource(name, size, color);
