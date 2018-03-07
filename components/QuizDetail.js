import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class QuizDetail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 48, margin: 18 }}>Does React Native work with Android?</Text>
          <Text style={{fontSize: 24, color: '#D22A25', fontWeight: 'bold', }}>Answer</Text>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <TouchableOpacity style={styles.correctBtn}>
            <View style={styles.btnTextView}>
              <Text style={styles.btnText}>Correct</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inCorrectBtn}>
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
  correctBtn: {
    borderRadius: 10,
    backgroundColor: '#0F7F12',
    height: 70,
    margin: 25,
    marginBottom: 0
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

export default QuizDetail