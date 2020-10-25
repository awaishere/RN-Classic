import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import Style from 'app/style';
import { NavigationBar } from 'app/components'

function Screen() {

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle="light-content" />

      <NavigationBar title={"Invoicer"} />

      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={[styles.textInputWrapper]}>
          <TextInput
            placeholder="Product name"
            autoCapitalize="none"
            placeholderTextColor="#2CA2C7"
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.textInputWrapper]}>
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            autoCapitalize="none"
            placeholderTextColor="#2CA2C7"
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.textInputWrapper]}>
          <TextInput
            placeholder="Quantity"
            keyboardType="numeric"
            autoCapitalize="none"
            placeholderTextColor="#2CA2C7"
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.textInputWrapper]}>
          <TextInput
            placeholder="Billing Address"
            autoCapitalize="none"
            placeholderTextColor="#2CA2C7"
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.textInputWrapper]}>
          <TextInput
            placeholder="Shipping Address"
            autoCapitalize="none"
            placeholderTextColor="#2CA2C7"
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.textInputWrapper]}>
          <TextInput
            placeholder="Contractor Name"
            autoCapitalize="none"
            placeholderTextColor="#2CA2C7"
            style={styles.inputStyle}
          />
        </View>

        <View style={[styles.textInputWrapper2, { marginTop: 20 }]}>
          <TextInput
            placeholder="Feedback"
            autoCapitalize="none"
            numberOfLines={12}
            placeholderTextColor="#2CA2C7"
            textAlignVertical={'top'}
            multiline={true}
            style={styles.inputStyle}
          />
        </View>

        <TouchableOpacity style={styles.btnStyle} onPress={() => {

        }}>
          <Text style={styles.textStyle}>Generate Invoice</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputStyle: {
    textAlign: 'left',
    padding: Platform.OS === 'android' ? 13 : 18,
    fontSize: 13,
    width: '100%',
    fontFamily: 'Montserrat-Medium',
    color: '#2CA2C7',
  },
  textInputWrapper: {
    width: '85%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#2CA2C7',
    height: 55,
    borderRadius: 35,
    paddingHorizontal: 15,
    marginTop: '5%',
  },
  textInputWrapper2: {
    width: '85%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#2CA2C7',
    borderRadius: 35,
    paddingHorizontal: 15,
    marginTop: '15%',
    minHeight: 200,
  },
  btnStyle: {
    width: Style.DEVICE_WIDTH / 1.7,
    height: Style.DEVICE_WIDTH / 7.5,
    backgroundColor: '#289EC2',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  }
})

export default Screen