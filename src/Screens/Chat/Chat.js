import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

import firestore from '@react-native-firebase/firestore';

const Chat = ({route}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firestore()
      .doc('chats/' + route.params.id)
      .onSnapshot(doc => {
        setMessages(
          doc.data().messages.map(messages => ({
            ...messages,
            createdAt: messages.createdAt?.toDate(),
          })),
        );
      });
  }, [route.params.id]);

  const onSend = useCallback(
    (m = []) => {
      firestore()
        .doc('chats/' + route.params.id)
        .set({messages: GiftedChat.append(messages, m)}, {merge: true});
    },
    [route.params.id,messages],
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;
