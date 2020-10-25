import UnauthorizedStack from './SwitchNavigator/UnauthorizedStack/UnauthorizedStack'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

const SwitchNavigator = createSwitchNavigator({
  UnauthorizedStack: UnauthorizedStack
}, {
  initialRouteName: 'UnauthorizedStack'
})

export default createAppContainer(SwitchNavigator)