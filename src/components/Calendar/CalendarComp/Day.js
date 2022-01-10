import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import defaultStyles from '../../../assets/defaultStyles';

import isSameDay from '../../../utils/isSameDay';

// console.log(selectedDay());
export default function Day({ day, isThisMonth, isThisWeekendDay, selectedDay, setSelectedDay }) {

  return (
    <TouchableOpacity style={styles.container} onPress={() => setSelectedDay(day)} >
      <View
        style={[
          styles.day,
          isSameDay(new Date(), day) && styles.currentDay,
          isSameDay(selectedDay, day) && styles.selectedDay
        ]}
      >
        <Text
          style={[
            styles.text,
            isThisMonth ? styles.textInMonth : styles.textNotInMonth,
            isSameDay(new Date(), day) && styles.currentDayText,
            isThisWeekendDay && isThisMonth && styles.weekendDay,

          ]}
        >
          {day.getDate()}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100 / 7. + '%', padding: '1.5%',
  },
  day: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  currentDay: {
    backgroundColor: defaultStyles.mainColor,
  },
  weekendDay: {
    color: defaultStyles.mainColor,
    opacity: 0.5
  },
  text: {
    textAlign:'center',
    textAlignVertical:'center',
    fontSize: 16,
  },
  currentDayText: {
    color:'white',
  },
  textInMonth: {
    fontWeight: 'bold',
    color: defaultStyles.secondaryColor
  },
  textNotInMonth: {
    color: '#888',
  },
  selectedDay: {
    borderWidth: 2,
    borderColor: defaultStyles.mainColor
  }
})
