import {StyleSheet} from "react-native";
import {colors} from "../utils";

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
	button: {
		marginTop: 15
	}
});

export default styles;
