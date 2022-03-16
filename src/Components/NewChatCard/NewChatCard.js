import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './NewChatCard.styles';

const NewChatCard = ({name, lastMessage, style, onPress}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <View style={styles.avatar}>
          <Text style={styles.textAvatar}>
            {name
              .split(' ')
              .reduce((prev, current) => `${prev}${current[0]}`, '')}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.LastMessage}>{lastMessage}</Text>
        </View>
        <Icon name="arrow-forward-ios" size={18} />
      </TouchableOpacity>
      <View style={styles.serprator} />
    </SafeAreaView>
  );
};

export default NewChatCard;
