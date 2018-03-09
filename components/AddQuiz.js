import React, {Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native'

class AddQuiz extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}> 
        <TextInput placeholder='Questions' style={{ borderWidth: 2, width: width - 60, marginTop: 30, height: 40, borderRadius: 10, padding: 5 }} />
        <TextInput placeholder='Answer' style={{ borderWidth: 2, width: width - 60, marginTop: 30, height: 40, borderRadius: 10, padding: 5}} />
      </View>
    )
  }
}
const width = Dimensions.get('window').width

export default AddQuiz