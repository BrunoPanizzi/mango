import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import defaultStyles from '../../assets/defaultStyles'

import AnimatedMonth from './AnimatedMonth'

export default function Header({ currDate, previousMonth, nextMonth }) {
	const arrowConfig = {
		size: 32,
		color: defaultStyles.mainColor
	}

	return (
		<View>
			<View style={styles.months}>
				<TouchableOpacity onPress={previousMonth}>
					<Ionicons name='chevron-back' {...arrowConfig} />
				</TouchableOpacity>

				<AnimatedMonth currDate={currDate}/>

				<TouchableOpacity onPress={nextMonth}>
					<Ionicons name='chevron-forward' {...arrowConfig} />
				</TouchableOpacity>
			</View>
			<View style={styles.weekDays}>
				<Text key={0} style={styles.day}>D</Text>
				<Text key={1} style={styles.day}>S</Text>
				<Text key={2} style={styles.day}>T</Text>
				<Text key={3} style={styles.day}>Q</Text>
				<Text key={4} style={styles.day}>Q</Text>
				<Text key={5} style={styles.day}>S</Text>
				<Text key={6} style={styles.day}>S</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	months: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	weekDays: {
		borderRadius: 8,
		backgroundColor: defaultStyles.mainColor,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 6,
	},
	day: {
		textAlign: 'center',
		width: '13%',
		fontSize: 14,
		fontWeight: 'bold',
		color: defaultStyles.backgroundColor,
		borderRadius: 8,
		padding: 6
	}
})
