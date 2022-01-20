import { StyleSheet, Text, View, ScrollView } from 'react-native'

import defaultStyles from '../assets/defaultStyles'

import PrazosCard from '../components/home/PrazosCard/PrazosCard';
import RankingCard from '../components/home/RankingCard/RankingCard';
import PlantaCard from '../components/home/PlantaCard/PlantaCard';

export default function Home() {

  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding: 16}}>
      <PlantaCard />
      <RankingCard />
      <PrazosCard />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:defaultStyles.backgroundColor,
  },
})
