import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Card, ListItem, List, Button } from 'react-native-elements'


const { height, width } = Dimensions.get('window');




export default class Lists extends Component {

  constructor(){
    super();
    this.state = {
      entries: []
    }
  }

  render() {
  	const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]
    return (
          <View style={{flex:1}}>
          	<ScrollView>
            	<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
      />
    ))
  }
</List>  
          	</ScrollView>
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
