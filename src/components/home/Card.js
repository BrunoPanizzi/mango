import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
  card: {
    width:  Dimensions.get('screen').width * 0.8,
    marginHorizontal: 8,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow:'hidden',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },shadowOpacity: 1,
    shadowRadius: 20.68,
    elevation: 4,
  }
})

export default styles.card
