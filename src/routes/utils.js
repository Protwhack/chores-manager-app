import { Navigation } from 'react-native-navigation';

export const replace = (componentId, name, payload = {}) => {
  Navigation.setStackRoot(componentId, { component: { name, ...payload } });
};

export const push = (componentId, name, payload = {}) => {
  Navigation.push(componentId, { component: { name, ...payload } });
};
