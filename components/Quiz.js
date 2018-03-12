import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { getDeckItem } from '../helper/api';
import { NavigationActions } from 'react-navigation';


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {
        questions: [
          {
            question: '',
            answer: '',
          },
        ],
      },
      toggleAnswer: false,
      cardCurrentNumber: 0,
      counter: 0,
      endOfQuiz: false,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item,
  });

  componentDidMount() {
    getDeckItem(this.props.navigation.state.params.item)
      .then(results => this.setState(() => ({ deck: results })))
  }

  quizNextCard = (cardCurrentNumber, deck) => {
    cardCurrentNumber++

    if(cardCurrentNumber < deck.questions.length){
      this.setState(() => ({cardCurrentNumber: cardCurrentNumber}))
    }
    else{
      this.setState(() => ({endOfQuiz: true}))
    }
  };

  invertCardSide = toggleAnswer =>
    this.setState(() => ({ toggleAnswer: !toggleAnswer }));
  
  backToMainView = item => {
    const {navigate} = this.props.navigation
    return navigate('MainView')
  }
  restartQuiz = () => {
    this.setState(() => ({
      endOfQuiz: false,
      counter: 0,
      cardCurrentNumber: 0,
    }))
  }
  incrementQuestionCounter = (cardCurrentNumber, deck) => {
    this.setState(() => ({ counter: this.state.counter + 1}))
    this.quizNextCard(cardCurrentNumber, deck)
  }
  render() {
    const {
      deck,
      toggleAnswer,
      cardCurrentNumber,
      counter,
      endOfQuiz
    } = this.state;
    return endOfQuiz ? (
      <View style={{flex: 1}}>
        <View>
          <Text style={{ justifyContent: 'center' }}>Your scored {counter} / {deck.questions.length}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.correctBtn} onPress={() => this.backToMainView(deck.title)}>
            <View style={styles.btnTextView}>
              <Text style={styles.btnText}>Back to My Decks</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.correctBtn} onPress={() => this.restartQuiz()}>
            <View style={styles.btnTextView}>
              <Text style={styles.btnText}>Restart Quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
        <ScrollView style={styles.container}>
          <View style={styles.textContainer}>
            <Text>{`${cardCurrentNumber + 1} of ${deck.questions.length}`}</Text>
            <Text style={styles.quizText}>{
              toggleAnswer
                ? deck.questions[cardCurrentNumber].answer
                : deck.questions[cardCurrentNumber].question}</Text>
            <TouchableOpacity onPress={() => this.invertCardSide(toggleAnswer)}>
              <Text style={styles.answerBtn}>Answer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.correctBtn} onPress={() => this.incrementQuestionCounter(cardCurrentNumber, deck)}>
              <View style={styles.btnTextView}>
                <Text style={styles.btnText}>Correct</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inCorrectBtn} onPress={() => this.quizNextCard(cardCurrentNumber, deck)}>
              <View style={styles.btnTextView}>
                <Text style={styles.btnText}>Incorrect</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  quizText: {
    fontSize: 48,
    margin: 18,
  },
  answerText: {
    fontSize: 24,
    color: '#D22A25',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'flex-end'
  },
  correctBtn: {
    borderRadius: 10,
    backgroundColor: '#0F7F12',
    height: 70,
    margin: 25,
    marginBottom: 0
  },
  answerBtn: {
    color: '#D22A25',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inCorrectBtn: {
    backgroundColor: '#D22A25',
    borderRadius: 10,
    height: 70,
    margin: 25,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  btnTextView: {
    flex: 1,
    justifyContent: 'center'
  },
})

export default Quiz