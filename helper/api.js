import { AsyncStorage } from 'react-native'

export const UDACICARDS_STORAGE_KEY = 'UdaciCards:decks'

let initData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function finalDeckResult(results) {
  return results === null ? setInitData() : JSON.parse(results)
}

export function fetchData() {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY).then(finalDeckResult)
}

export function getDeckItem(item) {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(finalDeckResult)
    .then(results => results[item])
}

export function addNewDeckTitle(title, key) {
  return AsyncStorage.mergeItem(
    UDACICARDS_STORAGE_KEY, 
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      }
    })
  )
}

export function addNewCardToDeck(title, content) {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY).then(data => {
    decks = JSON.parse(data);
    decks[title].questions.push(content);
    AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function setInitData() {
  AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(initData))
  return initData
}