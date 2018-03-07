import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class CardDetail extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 48 }}>udacicards</Text>
          <Text style={{ fontSize: 24 }}>{3} cards</Text>
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <TouchableOpacity style={styles.addBtn}>
            <View style={styles.quizTextView}>
              <Text style={styles.addText}>Add Card</Text>
            </View>          
          </TouchableOpacity>
          <TouchableOpacity style={styles.quizBtn}>
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