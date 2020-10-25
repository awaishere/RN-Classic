import React from 'react'
import { SwitchNavigator } from 'app/components'
import { Provider } from 'react-redux'
import configureStore from 'app/store'

const App = () => (
  <Provider store={configureStore}>
    <SwitchNavigator />
  </Provider>
)
export default App
