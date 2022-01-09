import { ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// Components
import AdminPrazosCard from '../components/home/AdminPrazosCard/AdminPrazosCard';
import RankingCard from '../components/home/RankingCard/RankingCard';
import PlantaCard from '../components/home/PlantaCard/PlantaCard';


export default function HomeAdmin({ navigation }){
  return (
    <View style={styles.container}>
    {/* isso aqui devia ser gerado com base nas turmas que o professor tem,
    mas por enquanto é o que tem */}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Class', 'xyz')}>
        <Text>Ir para turma xyz</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: "white",
    padding: 32,
    alignItems: 'center'
  },
  button: {
    aspectRatio: 1,
    width: 150,
    borderRadius: 16,
    borderWidth: 1
  }
})

