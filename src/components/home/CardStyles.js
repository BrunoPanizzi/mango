import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width * 0.8 ,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow:'hidden',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  }
})

export default styles.card
