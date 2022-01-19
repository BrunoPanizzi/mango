import { StyleSheet, Text, View, ScrollView } from 'react-native'

import defaultStyles from '../assets/defaultStyles'

import PrazosCard from '../components/home/PrazosCard/PrazosCard';
import RankingCard from '../components/home/RankingCard/RankingCard';
import PlantaCard from '../components/home/PlantaCard/PlantaCard';

export default function Home() {

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.cardsSlider}
        contentContainerStyle={{paddingVertical: 8}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <PlantaCard />
        <RankingCard />
      </ScrollView>
      <PrazosCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:defaultStyles.backgroundColor,
  },
  cardsSlider: {
    // minHeight: 400,
    // maxHeight: 400,
    flex: 1,
    marginBottom: 16
  }
})
