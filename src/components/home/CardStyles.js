import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxHeight: Dimensions.get('window').height - 64,
    backgroundColor: 'white',
    marginBottom: 16,
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
