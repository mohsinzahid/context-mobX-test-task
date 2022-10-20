import React from 'react';
import {View} from 'react-native';
import {styles} from "../styles";
import {ConverterContextProvider} from "../../contexts/ConverterContext";
import {HooksForm} from '../../components';

const Hooks = () => {
  return (
    <ConverterContextProvider>
      <View style={styles.container}>
        <HooksForm type={'hooks'} />
      </View>
    </ConverterContextProvider>
  );
};

export default Hooks;
