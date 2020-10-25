import HomeScreen from 'app/routes/Home'

import { createStackNavigator } from 'react-navigation-stack'

export default createStackNavigator({
  home: {
    screen: HomeScreen,
  },
},
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      header: null
    }
  }
)

