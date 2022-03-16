import React from 'react';
import {View, TextInput} from 'react-native';
import Button from '../../Button';

import Modal from 'react-native-modal';

import styles from './ContentInput.styles';

const ContentInput = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter a user email address"
            onChangeText={setText}
          />
        </View>
        <Button
          text="Conversation"
          onPress={handleSend}
          theme="primary"
        />
      </View>
    </Modal>
  );
};

export default ContentInput;
