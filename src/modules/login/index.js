import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button
} from 'react-native';


var width = Dimensions.get('window').width;

export default class Login extends Component {

  goTo(data){
    const {navigate} = this.props.navigation;
    navigate('Home',{"token":"test"})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login
        </Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          placeholder="Username"
        />
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          placeholder="Pasword"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={this.goTo.bind(this)}
          style={styles.buttonLogin}
          color="#ad1d0a"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle:{
    marginBottom:10,
    width: width * .8,
    borderWidth: 0.1,
    borderStyle: 'solid',
    borderRadius:10,
    backgroundColor: 'white'
  },
  buttonLogin:{
    width:100,
    flexDirection: 'row',
    alignSelf: 'stretch',
    height:70,
   justifyContent: 'center',
   alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
