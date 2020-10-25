import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { UserActions } from 'app/store/actions';

import Style from 'app/style';
import { NavigationBar } from 'app/components'

let connectProps = {
  ...UserActions,
};
let connectState = (state) => ({
  details: state.User.current.get('invoice_details')
});

let enhancer = connect(connectState, connectProps);

function Screen(props) {

  let { details } = props;

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle="light-content" />

      <NavigationBar title={"Invoicer"} />

      <ScrollView>
        <View style={styles.detailsContainer}>
          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Product Name</Text>
            <Text style={styles.textRight}>{details.product_name && details.product_name}</Text>
          </View>

          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Price</Text>
            <Text style={styles.textRight}>{details.price && `${details.price}$`}</Text>
          </View>

          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Quantity</Text>
            <Text style={styles.textRight}>{details.quantity && details.quantity}</Text>
          </View>

          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Billing Address</Text>
            <Text style={styles.textRight}>{details.billing_address && details.billing_address}</Text>
          </View>

          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Shipping Address</Text>
            <Text style={styles.textRight}>{details.shipping_address && details.shipping_address}</Text>
          </View>

          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Contractor Name</Text>
            <Text style={styles.textRight}>{details.contractor_name && details.contractor_name}</Text>
          </View>

          <View style={styles.itemStyle}>
            <Text style={styles.textLeft}>Feedback</Text>
            <Text style={styles.textRight}>{details.feedback && details.feedback}</Text>
          </View>
        </View>

        <TouchableOpacity style={[styles.btnStyle, { marginBottom: 20 }]} onPress={() => { }}>
          <Text style={styles.textStyle}>Generate PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnStyle, { marginTop: 0 }]} onPress={() => { props.navigation.goBack() }}>
          <Text style={styles.textStyle}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnStyle: {
    width: Style.DEVICE_WIDTH / 1.7,
    height: Style.DEVICE_WIDTH / 7.5,
    backgroundColor: '#289EC2',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  detailsContainer: {
    width: '85%',
    paddingVertical: 20,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#289EC2'
  },
  itemStyle: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  textLeft: {
    color: '#289EC2',
    fontSize: 11
  },
  textRight: {
    fontSize: 13
  }
})

export default enhancer(Screen);