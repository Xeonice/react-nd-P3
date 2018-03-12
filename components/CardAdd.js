import React, {Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native'
import { NavigationActions, StackNavigator } from 'react-navigation'

class AddQuiz extends Component {
  state = {}
  
  submitCheck = () => {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    const { question, answer } = this.state;
    const { store } = this.props;
    
    if (!question) {
      Alert
    }
    this.toHome()
  }
  toHome = () => (
    this.props.navigation.goback()
  )
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}> 
        <TextInput placeholder='Questions' style={styles.input} onChangeText={ (text) => {
          this.setState({text})
          console.log(this.state.text)
        }}/>
        <TextInput placeholder='Answer' style={styles.input} onChangeText={(text) => {
          this.setState({ text })
          console.log(this.state.text)
        }} />
        <TouchableOpacity style={[styles.button, styles.buttonBlack]} onPress={() => this.props.navigation.goBack()}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 2, 
    width: width - 60, 
    marginTop: 30, 
    height: 40, 
    borderRadius: 10, 
    padding: 5,
  },
  button: {
    marginTop: 30,
    width: 200,
    padding: 15,
    borderColor: '#000',
    borderRadius: 6,
  },
  buttonBlack: {
    backgroundColor: '#000',
  },
})

export default AddQuiz