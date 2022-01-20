import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import defaultStyles from '../../assets/defaultStyles';

export default function NovaTarefa() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('NovaTarefa')}
    >
      <View style={styles.line} />
      <View style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 54,
    height: 54,
    right: 20,
    bottom: 20,
    backgroundColor: defaultStyles.mainColor,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    position: 'absolute',
    width: '65%',
    height: 3,
    backgroundColor: 'white',
    borderRadius: 9
  }
});
