import SwitchNavigator from 'app/routes'
import React, { Component } from 'react'
import FlashMessage from "react-native-flash-message";
import { View } from "react-native";
import { connect } from 'react-redux'

let connectProps = {
}

let connectState = state => ({
})

let enhancer = connect(connectState, connectProps)

class Screen extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SwitchNavigator />

        <FlashMessage position="top" />
      </View>
    );
  }
}

export default enhancer(Screen)