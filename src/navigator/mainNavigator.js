import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard123175186Navigator from '../features/Dashboard123175186/navigator';
import BlankScreen22175185Navigator from '../features/BlankScreen22175185/navigator';
import Settings175170Navigator from '../features/Settings175170/navigator';
import EmailAuth175165Navigator from '../features/EmailAuth175165/navigator';
import ArticleList175162Navigator from '../features/ArticleList175162/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard123175186: { screen: Dashboard123175186Navigator },
BlankScreen22175185: { screen: BlankScreen22175185Navigator },
Settings175170: { screen: Settings175170Navigator },
EmailAuth175165: { screen: EmailAuth175165Navigator },
ArticleList175162: { screen: ArticleList175162Navigator },

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
