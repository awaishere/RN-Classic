import InvoiceScreen from 'app/routes/Invoice'
import DetailsScreen from 'app/routes/Details'

import { createStackNavigator } from 'react-navigation-stack'

export default createStackNavigator({
  invoice: {
    screen: InvoiceScreen,
  },
  details: {
    screen: DetailsScreen,
  },
},
  {
    initialRouteName: 'invoice',
    defaultNavigationOptions: {
      header: null
    }
  }
)

