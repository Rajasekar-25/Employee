import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import employee from './src/employee'
const navigator = createStackNavigator ({

  Emp : employee,

},
{
initialRouteName: 'Emp',
defaultNavigationOptions:{
  title:'employees'
}

}
);

export default createAppContainer (navigator);