import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'


import defaultStyles from '../assets/defaultStyles'

//components
import PrazosCard from '../components/home/PrazosCard/PrazosCard';
import RankingCard from '../components/home/RankingCard/RankingCard';
import PlantaCard from '../components/home/PlantaCard/PlantaCard';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.cards}
        contentContainerStyle={{paddingVertical: 16}}
        horizontal
        snapToInterval={Dimensions.get('screen').width * 0.8 }
        decelerationRate={'fast'}
        overScrollMode='never'
      >
        <PlantaCard />
        <PrazosCard />
        <RankingCard />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:defaultStyles.backgroundColor,
  },
  cards: {
    flex: 1,
    margin: 16,
    paddingHorizontal: 8,
    // backgroundColor: 'skyblue'
  },
})
