import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function Home() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View style={styles.card}>
        
      </View>
      <View style={styles.card}>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width:300,
    height:'100%',
    backgroundColor:'white',
    padding:5,

  

  },
  card:{
    width:'100%',
    height:'100%',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:10
  }
})
