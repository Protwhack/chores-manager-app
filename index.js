import { Navigation } from 'react-native-navigation';
import { getHomeInfo, getToken } from '~/utils/asyncStorage';
import authRoutes from '~/routes/authRoutes';
import noAuthRoutes from '~/routes/noAuthRoutes';
import noHomeRoutes from '~/routes/noHomeRoutes';
import '~/routes/registerScreens';
import theme from '~/theme';

Navigation.setDefaultOptions({
  bottomTab: {
    selectedTextColor: theme.colors.primary,
    textColor: theme.colors.grey1,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  const [homeInfo, isLogined] = await Promise.all([getHomeInfo(), getToken()]);

  if (!isLogined) return noAuthRoutes();
  homeInfo ? authRoutes(homeInfo) : noHomeRoutes();
  return;
});
