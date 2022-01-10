import { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import CalendarComp from '../components/Calendar/CalendarComp/';

import defaultStyles from '../assets/defaultStyles';
import Events from '../components/Calendar/Events'

export default function Calendario() {
  const [selectedDay, setSelectedDay] = useState()

  return(
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}} contentContainerStyle={styles.container}>
      <View style={styles.calendarContainer}>
        <CalendarComp
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </View>

      <Events selectedDay={selectedDay} />
    </ScrollView>
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
