import { View, ScrollView, StyleSheet } from 'react-native';

import { CalendarProvider } from '../contexts/CalendarContext'

import CalendarComp from '../components/Calendar/CalendarComp/';
import Events from '../components/Calendar/Events'

export default function Calendario() {
  return(
    <CalendarProvider>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}} contentContainerStyle={styles.container}>
        <View style={styles.calendarContainer}>
          <CalendarComp />
        </View>
        <Events />
      </ScrollView>
    </CalendarProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 32,
  },
  calendarContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    elevation: 5,
    marginBottom: 16
  }
})
