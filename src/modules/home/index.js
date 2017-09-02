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
import { Card, ListItem, Button } from 'react-native-elements'


const { height, width } = Dimensions.get('window');

export default class Home extends Component {

  constructor(){
    super();
    this.state = {
      entries: []
    }
  }

  goTo(data){
    const {navigate} = this.props.navigation;
    navigate('List',{"token":"test"})
  }

  render() {
    return (
          <View style={{flex:1}}>
          <ScrollView>
                <Card
                title='Studio'>
                   <Image
                    source={require('../../static/studio.jpeg')}
                  />
                <Text style={{marginBottom: 10,textAlign : 'center'}}>
                  Book Now Your Studio
                </Text>
                <Button
                  icon={{name: 'code'}}
                  backgroundColor='#d0b2e8'
                  onPress={this.goTo.bind(this)}
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW' />
              </Card>
              <Card
                title='Studio Recording'>
                <Image
                    source={require('../../static/studio.jpeg')}
                  />
                <Text style={{marginBottom: 10}}>
                  Book Now Your Studio Recording
                </Text>
                <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  onPress={this.goTo.bind(this)}
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW' />
              </Card>
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
