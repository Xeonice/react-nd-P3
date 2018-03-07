import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Constants} from 'expo'
import Card from './components/Card'
import CardDetail from './components/CardDetail'
import QuizDetail from './components/QuizDetail'

function UdaciStatusBar({backgroundColor,...props}) {
  return (
    <View
      style={{
      backgroundColor,
      height: Constants.statusBarHeight
    }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor = {'#000' }barStyle = 'light-content'/>
        <CardDetail/>
      </View>
    )
  }
}


