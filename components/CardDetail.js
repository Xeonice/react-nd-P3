import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import CardAdd from './CardAdd'
import { NavigationAction } from 'react-navigation';
import { getDeckItem } from '../helper/api';
import { formatQuestionsLength} from '../helper/helper'

class CardDetail extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deck: {questions: []}
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item,
  });

  componentDidMount() {
    getDeckItem(this.props.navigation.state.params.item)
    .then(results => this.setState(() => ({ deck: results })))
  }

  startQuiz = item =>  {
    const { navigate } = this.props.navigation;
    return navigate('Quiz', { item });
  }

  handleNavigationBackToItem = content => {
    const newDeck = this.state.deck;
    newDeck.questions.push(content);
    this.setState(() => ({ deck: newDeck}));
  }

  addNewCard = item => {
    const { navigate } = this.props.navigation
    return navigate('CardAdd', {
      item,
      navBack: this.handleNavigationBackToItem,
    })
  }



  render() {
    const { deck } = this.state
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckNum}>{formatQuestionsLength(deck.questions.length)}</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.addBtn} onPress={() => this.addNewCard(deck.title)}>
            <View style={styles.quizTextView}>
              <Text style={styles.addText}>Add Card</Text>
            </View>          
          </TouchableOpacity>
          <TouchableOpacity style={styles.quizBtn} onPress={() => this.startQuiz(deck.title)}>
            <View style={styles.quizTextView}>
              <Text style={styles.quizText}>Start Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 48
  },
  deckNum: {
    fontSize: 24
  },
  btnContainer: {
    justifyContent: 'flex-end'
  },
  addBtn: {
    borderRadius: 10,
    borderWidth: 2,
    height: 60,
    margin: 25,
    marginBottom: 0
  },
  quizBtn: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 60,
    margin: 25,
  },
  quizText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  quizTextView: {
    flex: 1,
    justifyContent: 'center'
  },
  addText: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default CardDetail