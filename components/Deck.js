import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SectionList, } from 'react-native'

class Deck extends Component {
  submitCheck = () => {
    console.log("You tapped the button")
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={this.submitCheck}>
            <Text style={styles.deckTitle}>udacicards</Text>
            <Text style={styles.deckNum}>{3} cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={this.submitCheck}>
            <Text style={styles.deckTitle}>udacicards</Text>
            <Text style={styles.deckNum}>{3} cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={this.submitCheck}>
            <Text style={styles.deckTitle}>udacicards</Text>
            <Text style={styles.deckNum}>{3} cards</Text>
          </TouchableOpacity>
        </View>
      </View>
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