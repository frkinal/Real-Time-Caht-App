import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FloatingButton.styles';

const FloatingButton = ({onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View  style={styles.button} >
        <Icon name={icon} color="white" size={38} />
      </View>
    </TouchableOpacity>
  );
};

export default FloatingButton;
