import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

class Card extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>DECKS</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={{fontSize: 24}}>udacicards</Text>
            <Text>{3} cards</Text>
          </View>
          <View style={styles.card}>
            <Text>udacicards</Text>
            <Text>{3} cards</Text>
          </View>
          <View style={styles.card}>
            <Text>udacicards</Text>
            <Text>{3} cards</Text>
          </View>
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
  }
});
export default Card