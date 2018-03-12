import React, {Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native'
import { NavigationActions, StackNavigator } from 'react-navigation'
import { addNewCardToDeck } from '../helper/api'

class CardAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      title: '',
    };
  }  
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item,
  });

  componentDidMount() {
    this.setState(() => ({ title: this.props.navigation.state.params.item }))
  }

  addNewCard = title => {
    const content = {
      question: this.state.question,
      answer: this.state.answer
    };
    return addNewCardToDeck(title, content).then(() => 
      this.returnToDeckItem(this.title, content))
  }
  returnToDeckItem = (item, content) => {
    const { navigate, dispatch } = this.props.navigation
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MainView' })]
    });
    dispatch(resetAction);
    navigate('DeckItem', { item })
  }
  render() { 
    return (
      <View style={{flex: 1, alignItems: 'center'}}> 
        <TextInput placeholder='Questions' style={styles.input} onChangeText={
          question => this.setState({question})
        }/>
        <TextInput placeholder='Answer' style={styles.input} onChangeText={
          answer => this.setState({answer})
        }/>
        <TouchableOpacity style={[styles.button, styles.buttonBlack]} onPress={() => this.addNewCard(this.props.navigation.state.params.item)}>
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

export default CardAdd