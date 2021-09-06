import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import employee from './src/employee';
import Profile from './src/employeeprofile';
const navigator = createStackNavigator ({

  Emp : employee,
  Profile :Profile,

},
{
initialRouteName: 'Emp',
defaultNavigationOptions:{
  title:'employees',

}

}
);

export default createAppContainer (navigator);