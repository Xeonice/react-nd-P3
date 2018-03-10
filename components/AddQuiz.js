import React, {Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native'

class AddQuiz extends Component {
  state = {}
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
})

export default AddQuiz