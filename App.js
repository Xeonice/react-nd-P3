import React from 'react';
import {StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import {Constants} from 'expo'
import Card from './components/Card'
import CardDetail from './components/CardDetail'
import QuizDetail from './components/QuizDetail'
import AddCardList from './components/AddCardList'
import AddQuiz from './components/AddQuiz'
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation'

const Tabs = TabNavigator({
  Main: {
    screen: Card,
    navigationOptions: {
      tabBarLabel: 'Card',
    }
  },
  Add: {
    screen: AddCardList,
    navigationOptions: {
      tabBarLabel: 'Add',
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#333' : '#fff',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#fff' : '#333',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 66,
        shadowOpacity: 1
      }
    }
})
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
        <Tabs />
      </View>
    )
  }
}


