import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

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
		let currentDay = new Date(assistDate)
		let dayObj =
			<Day
				key={Math.random()}
				day={currentDay}
				isThisMonth={currentDay.getMonth() === month.getMonth()}
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
    elevation: 4
	},
	days: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})
