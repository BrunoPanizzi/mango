import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../../assets/defaultStyles'

export default function Day({ day, isThisMonth }) {
	return (
		<View
			style={[
				styles.day,
				{ width: 100 / 7. + '%', aspectRatio: 1, padding: '2%' },
			]}
		>
			<Text style={[styles.text, isThisMonth ? styles.textInMonth : styles.textNotInMonth]}>
				{day.getDate()}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	day: {
		marginTop: '1%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		position: 'absolute',
		zIndex: 2,
		fontSize: 16,
		color: defaultStyles.secondaryColor
	},
	textInMonth: {
		fontWeight: 'bold'
	},
	textNotInMonth: {
		color: defaultStyles.textColor,
	}
})
