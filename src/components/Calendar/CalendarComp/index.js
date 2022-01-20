import { useState, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import Day from './Day'
import Header from './Header'


export default function CalendarComp() {
	const today = new Date()
 	const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth()))

  const daysComponentsArr = useMemo(() => {
    const calendarStart = new Date(month.valueOf() - month.getDay() * 24 * 60 * 60 * 1000)
    let daysArr = []
    let assistDate = calendarStart.valueOf()
    for (let i = 0; i < 42; i++) {
      let day = new Date(assistDate)
      let dayObj =
        <Day
          key={Math.random()}
          day={day}
          isThisMonth={day.getMonth() === month.getMonth()}
          isThisWeekendDay={day.getDay() == 6 || day.getDay() == 0}
        />
      daysArr.push(dayObj)
      assistDate += 24 * 60 * 60 * 1000
    }

    return daysArr
  }, [month])

	const nextMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1))
	}

	const previousMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1))
	}

	return (
		<>
			<Header
				currDate={month}
				previousMonth={previousMonth}
				nextMonth={nextMonth}
			/>
			<View style={styles.days}>
				{daysComponentsArr}
			</View>
		</>
	)

}

const styles = StyleSheet.create({
	days: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})
