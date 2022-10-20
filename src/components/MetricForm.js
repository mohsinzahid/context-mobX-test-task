import React from 'react';
import {StyleSheet, View} from "react-native";
import {TextInput} from '../components';

const MetricForm = (props) => {
	const {kg, changeKg, mm, changeM} = props;
	return (
		<View  style={styles.container}>
			<TextInput
				value={kg}
				onChangeText={changeKg}
				label={'kg'} />
			<TextInput
				value={mm}
				onChangeText={changeM}
				containerStyle={styles.containerStyle}
				label={'m'} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center'
	},
	containerStyle: {
		marginVertical: 15
	}
})

export default MetricForm;
