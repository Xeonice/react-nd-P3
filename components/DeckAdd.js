import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import { addNewDeckTitle } from '../helper/api';
import { NavigationActions } from 'react-navigation'

class DeckAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  createNewDeck = () => { 
    return addNewDeckTitle(this.state.inputText).then(
      this.navigateToDeckItem(this.state.inputText)
    )
  }

  navigateToDeckItem = item => {
    const { navigate, dispatch } = this.props.navigation;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'MainView', params: { item }})
      ]
    })
    dispatch(resetAction);
    navigate('DeckItem', { item })
  }
  render(){
    const {inputText} = this.state
    return (
      <View style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 36, padding: 20, textAlign: 'center' }}>What is the title of your new deck?</Text>
          <TextInput placeholder='Deck title' style={styles.input} onChangeText={inputText => this.setState({ inputText })} value={inputText} />
        </View>        
        <TouchableOpacity style={styles.quizBtn} onPress={this.createNewDeck}>
          <View style={styles.quizTextView}>
            <Text style={styles.quizText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  quizText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  quizTextView: {
    flex: 1,
    justifyContent: 'center',
  },
  quizBtn: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 50,
    margin: 25,
    marginRight: 80,
    marginLeft: 80,
  },
  input: {
    borderWidth: 2, 
    width: width - 60, 
    marginTop: 30, 
    height: 40, 
    borderRadius: 10, 
    padding: 5,
  }
})

export default DeckAdd