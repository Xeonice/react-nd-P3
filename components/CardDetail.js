import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class CardDetail extends Component {
  submitCheck = () => {
    console.log("You tapped the button")
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Text style={styles.deckTitle}>udacicards</Text>
          <Text style={styles.deckNum}>{3} cards</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.addBtn} onPress={this.submitCheck}>
            <View style={styles.quizTextView}>
              <Text style={styles.addText}>Add Card</Text>
            </View>          
          </TouchableOpacity>
          <TouchableOpacity style={styles.quizBtn} onPress={this.submitCheck}>
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