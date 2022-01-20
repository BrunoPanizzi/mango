import { useContext } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';

import { CalendarProvider } from '../contexts/CalendarContext'
import { AuthContext } from '../contexts/AuthProvider'

import CalendarComp from '../components/Calendar/CalendarComp/';
import Events from '../components/Calendar/Events'
import NovaTarefa from '../components/Calendar/NovaTarefa';

export default function Calendario() {
  const { auth } = useContext(AuthContext)

  return(
    <CalendarProvider>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}} contentContainerStyle={styles.container}>
        <View style={styles.calendarContainer}>
          <CalendarComp />
        </View>
        <Events />
      </ScrollView>
        {auth === 'teacher' && <NovaTarefa />}
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
