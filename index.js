import { Navigation } from 'react-native-navigation';
import { getToken } from '~/utils/asyncStorage';
import authRoutes from '~/routes/authRoutes';
import noAuthRoutes from '~/routes/noAuthRoutes';
import '~/routes';

Navigation.events().registerAppLaunchedListener(async () => {
  const isLogined = await getToken();
  isLogined ? authRoutes() : noAuthRoutes();
});
