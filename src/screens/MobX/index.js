import React from 'react';
import {View} from 'react-native';
import {styles} from "../styles";
import {MobXForm} from '../../components';
import { Provider } from 'mobx-react';
import store from '../../mobx';

const Mobx = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MobXForm type={'mobx'} />
      </View>
    </Provider>
  );
};

export default Mobx;
