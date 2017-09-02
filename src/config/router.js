import { StackNavigator } from 'react-navigation';

import Login from './../modules/login';
import Home from './../modules/home';
import Lists from './../modules/ListStudio';


const AppStack = StackNavigator({
    Login: {
      screen: Login,
      header: {
        visible:false
      },
    },
    Home: {
      screen: Home,
      header: {
        visible:false
      },
    },
    List: {
      screen: Lists,
      header: {
        visible:false
      },
    },
  },
  { headerMode: 'none' },
);

export default AppStack
