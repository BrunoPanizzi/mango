import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import React, { useState } from 'react';

import defaultStyles from '../../assets/defaultStyles';

// console.log(selectedDay());
export default function Day({ day, isThisMonth, isThisDay, isThisWeekendDay, Comp}) {

  function selectedDay(val) {

    console.log(val);
    return val
  }
  const [currentDayWindow, setCurrentDayWindow] = useState();

  function a() {
    return currentDayWindow;
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity
        style={[styles.day, isThisDay && isThisMonth ? styles.currentDay : styles.day]}
        onPress={() => {setCurrentDayWindow(day.getDate())}}

      >

        <Text style={[
          styles.text,
          isThisMonth ? styles.textInMonth : styles.textNotInMonth,
          isThisDay && isThisMonth ? styles.currentDayText : styles.text,
          isThisWeekendDay && isThisMonth ? styles.weekendDay : styles.text]}>
          {day.getDate()}
        </Text>
        {/* <TaskPopUp/> */}
      </TouchableOpacity>
    </View>

  )

}

// export {};

const styles = StyleSheet.create({
  container: {
    width: 100 / 7. + '%', padding: '2%',
  },
  day: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentDay: {
    backgroundColor: defaultStyles.mainColor,
    // borderColor: defaultStyles.mainColor,
    // borderWidth: 2,
    borderRadius: 10
  },
  weekendDay: {
    color:defaultStyles.mainColor,

    fontWeight:'normal'
  },
  text: {
    width:'100%',
    height:'100%',
    display:'flex',
    textAlign:'center',
    textAlignVertical:'center',

    position: 'absolute',
    zIndex: 2,
    fontSize: 16,

  },
  currentDayText: {
    color:'white',
    // color: defaultStyles.mainColor
  },
  textInMonth: {
    fontWeight: 'bold',
    color: 'rgb(100,100,100)'
  },
  textNotInMonth: {
    color: '#ccc',
  }
})
