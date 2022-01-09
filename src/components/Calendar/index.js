import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../../assets/defaultStyles'

import Day from './Day'
import Header from './Header'


export default function CalendarComp() {



	const today = new Date()
 	const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth()))
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
        isThisDay={
          today.getDate() == day.getDate() &&
          today.getMonth() == day.getMonth() &&
          today.getFullYear() == day.getFullYear()
        }
        isThisWeekendDay={day.getDay() == 6 || day.getDay() == 0}
        Comp={() => {return (<Text>a</Text>)}}
      />
		daysArr.push(dayObj)
		assistDate += 24 * 60 * 60 * 1000
	}

	const nextMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1))
	}

	const previousMonth = () => {
		setMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1))
	}

console.log(Day.prototype);
	return (
		<View style={[ {padding: 12}, styles.container]}>
			<Header
				currDate={month}
				previousMonth={previousMonth}
				nextMonth={nextMonth}
			/>
			<View style={styles.days}>
				{daysArr}
			</View>
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: defaultStyles.backgroundColor,
	},
	days: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})
