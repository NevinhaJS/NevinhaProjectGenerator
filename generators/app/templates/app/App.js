import config from './config';
import {
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';

import {
  getPageScreen
} from './utils/Navigator';

//TODO: Take a look in the drawerNavigation issue on github
//to see how to ignore an specific view on the main menu
const getRoutes = pages => Object.keys(pages).reduce(
  (initial, currentKey) => ({
    ...initial,
    [currentKey]: {
      screen: getPageScreen(pages[currentKey], currentKey),
      params: {
        settings: pages[currentKey].settings
      }
    }
  }), 
  {}
);

const AppNavigator = createDrawerNavigator(getRoutes(config.pages));

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
