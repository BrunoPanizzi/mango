import { View, StyleSheet, Text } from 'react-native'

import CardStyles from '../CardStyles'

import CardHeader from '../CardHeader';

export default function PlantaCard(){
  return(
    <View style={CardStyles}>
      <CardHeader tittle={'planta'}/>
      <Text style={styles.plant}>foto de planta bonita</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  plant: {
    height: 400,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
