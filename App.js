/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Judul from './Components/judul';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <View style={styles.container}>
        <Judul/>
        <Text style={styles.welcome}>Haaallooo!!</Text>
        <Text style={styles.welcome}>Debora Atalya Christy</Text>
        <Text style={styles.welcome}>13</Text>
        <Text style={styles.welcome}>XI RPL 2</Text>
        <Image style = {{ width : 300, height : 300 }}
        source={require('./titi.jpg')}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
