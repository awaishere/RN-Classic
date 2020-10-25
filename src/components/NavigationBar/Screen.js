import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Style from 'app/style';

export default class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerWidth}>
        <Text style={styles.headerStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWidth: {
    width: Style.DEVICE_WIDTH,
    height: Platform.OS === 'ios' ? 100 : 90,
    backgroundColor: '#1FA6D1',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerStyle: {
    color: 'white',
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
