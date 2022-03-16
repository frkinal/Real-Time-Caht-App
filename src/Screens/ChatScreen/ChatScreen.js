import React from 'react';
import {SafeAreaView, View} from 'react-native';

import FloatingButton from '../../Components/FloatingButton';
import ContentInput from '../../Components/Modal/ContentInput';
import NewChatCard from '../../Components/NewChatCard';

import styles from './ChatScreen.styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  function handleInputTogle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(email) {
    firestore()
      .collection('chats')
      .add({
        users: [auth()?.currentUser?.email, email],
        messages: [],
      })
      .then(doc => {
        navigation.navigate('_Chat', {id: doc.id});
      });
  }

  const [chats, setChats] = React.useState([]);
  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      firestore()
        .collection('chats')
        .where('users', 'array-contains', user.email)
        .onSnapshot(snapshot => {
          setChats(snapshot.docs);
        });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {chats.map(chat => (
        <React.Fragment key={chat.id}>
            <NewChatCard
              name={chat
                .data()
                .users.find(x => x !== auth()?.currentUser?.email)}
              lastMessage={
                chat.data().messages.length === 0
                  ? 'No Messages Yet'
                  : chat.data().messages[0].text
              }
              onPress={() => {
                navigation.navigate('_Chat', {id: chat.id});
              }}
            />
        </React.Fragment>
      ))}
      <FloatingButton icon="plus" onPress={handleInputTogle} />
      <ContentInput
        visible={inputModalVisible}
        onClose={handleInputTogle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
