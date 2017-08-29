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

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
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
