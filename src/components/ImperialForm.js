import React from 'react';
import {StyleSheet, View} from "react-native";
import {TextInput} from '../components';
import {colors} from "../utils";

const ImperialForm = (props) => {
	const {lbs, changeLbs, ft, changeFt, ins, changeIn} = props;
	return (
		<View  style={styles.container}>
			<TextInput value={lbs} onChangeText={changeLbs} label={'lbs'} />
			<View style={styles.row}>
				<View style={styles.inputContainer}>
					<TextInput value={ft} onChangeText={changeFt} label={'ft'} />
				</View>
				<View style={styles.inputContainer}>
					<TextInput value={ins} onChangeText={changeIn} label={'in'} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center'
	},
	titles: {
		color: colors.main,
		marginBottom: 5
	},
	row: {
		marginVertical: 15,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputContainer: {
		width: '47%'
	},
})

export default ImperialForm;
