import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SectionList, ScrollView} from 'react-native'
import { fetchData } from "../helper/api";
import { formatQuestionsLength } from '../helper/helper'
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDecks: {}
    }
  }
  componentDidMount() {
    fetchData().then(results => {
      this.setState(() => ({
        myDecks: results
      }))
    })
  }

  navigateToItem(item) {
    const { navigate } = this.props.navigation
    return navigate('CardDetail', { item })
  }
  render() {
    const { myDecks } = this.state
    return(
      <ScrollView style={styles.container}>
        {Object.keys(myDecks).map(item => {
          return(
            <View style={styles.cardContainer} key={myDecks[item].title}>
                <TouchableOpacity style={styles.card} onPress={() => this.navigateToItem(myDecks[item].title)}>
                <Text style={styles.deckTitle}>{myDecks[item].title}</Text>
                <Text style={styles.deckNum}>{formatQuestionsLength(myDecks[item].questions.length)}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  cardContainer: {
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderBottomWidth: 1,
  },
  deckTitle: {
    fontSize: 48
  },
  deckNum: {
    fontSize: 24
  }
});
export default Deck