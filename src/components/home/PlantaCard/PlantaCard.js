import { View, Dimensions, StyleSheet } from 'react-native'

import CardStyles from '../CardStyles'

import CardHeader from '../CardHeader';

export default function PlantaCard(){
  return(
    <View style={CardStyles}>
      <CardHeader tittle={'planta'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    // position:'relative',
    // width: widthCard,
    // height: heightCard,
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow:'hidden',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },shadowOpacity: 1,
    shadowRadius: 20.68,
    elevation: 10,
  }
})
