import React from 'react';
import {Text, View} from "react-native";
import {Menu, SaveButton, ResetButton, MetricForm, ImperialForm} from '../components';
import styles from './foamStyles';
import { inject, observer } from "mobx-react";

const MobXForm = (props) => {
	const {type, store} = props;

	return (
		<View  style={styles.container}>
			<Text style={styles.titles}>Unit converter (with {type})</Text>
			{
				store.menu === 'imperial' ?
					<ImperialForm lbs={store.lbs}
								  changeLbs={store.changeLbs}
								  ft={store.ft}
								  changeFt={store.changeFt}
								  ins={store.ins}
								  changeIn={store.changeIn}/> :
					<MetricForm kg={store.kg}
					            changeKg={store.changeKg}
					            mm={store.mm}
					            changeM={store.changeM} />
			}
			<Menu onPress={store.setMenu} active={store.menu} />
			<SaveButton onPress={store.saveDataToDisk} containerStyle={styles.button} />
			<ResetButton onPress={store.resetPress} />
		</View>
	);
};

export default inject("store")(observer(MobXForm));
