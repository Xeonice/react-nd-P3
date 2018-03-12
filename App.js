import React from 'react';
import {StyleSheet, Text, View, StatusBar, } from 'react-native';
import {Constants} from 'expo'
import Deck from './components/Deck'
import DeckAdd from './components/DeckAdd'
import CardDetail from './components/CardDetail'
import Quiz from './components/Quiz'
import CardAdd from './components/CardAdd'
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation'

const Tabs = TabNavigator({
  Main: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  Add: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'Add',
    }
  }
  }, {
    tabBarOptions: {
      activeTintColor: '#333',
      style: {
        height: 56,
        backgroundColor: '#fff',
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
const MainNavigator = StackNavigator({
  MainView: {
    screen: Tabs,
  },
  Quiz: {
    screen: Quiz,
  },
  DeckAdd: {
    screen: DeckAdd,
  },
  CardDetail: {
    screen: CardDetail,
  },
  CardAdd: {
    screen: CardAdd
  }

});
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
        <MainNavigator />
      </View>
    )
  }
}


