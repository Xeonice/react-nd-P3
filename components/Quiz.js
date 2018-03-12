import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Quiz extends Component {
  submitCheck = () => {
    console.log("You tapped the button")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.quizText}>Does React Native work with Android?</Text>
          <TouchableOpacity onPress={this.submitCheck}>
            <Text style={styles.answerBtn}>Answer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.correctBtn} onPress={this.submitCheck}>
            <View style={styles.btnTextView}>
              <Text style={styles.btnText}>Correct</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inCorrectBtn} onPress={this.submitCheck}>
            <View style={styles.btnTextView}>
              <Text style={styles.btnText}>Incorrect</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
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