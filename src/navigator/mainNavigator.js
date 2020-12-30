import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen016592Navigator from '../features/CopyOfCopyOfBlankScreen016592/navigator';
import CopyOfBlankScreen016591Navigator from '../features/CopyOfBlankScreen016591/navigator';
import BlankScreen016590Navigator from '../features/BlankScreen016590/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen016592: { screen: CopyOfCopyOfBlankScreen016592Navigator },
CopyOfBlankScreen016591: { screen: CopyOfBlankScreen016591Navigator },
BlankScreen016590: { screen: BlankScreen016590Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
