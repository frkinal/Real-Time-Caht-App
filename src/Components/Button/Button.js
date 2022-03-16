import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.styles';

export const Button = ({text, onPress, loading, icon, theme}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[theme].buttonContainer}>
          <Icon name={icon} color="white" size={18} />
          <Text style={styles[theme].text}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
