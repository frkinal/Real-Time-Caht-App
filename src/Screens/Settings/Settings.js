import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import NewChatCard from '../../Components/NewChatCard';

import styles from './Settings.styles';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const Settings = ({navigation}) => {
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

  async function handleLogOut() {
    try {
      await auth().signOut(user => {
        firestore()
          .collection('chats')
          .where('users', 'array-contains', user.email)
          .onSnapshot(snapshot => {
            setChats(snapshot.docs);
          });
      },);
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }

  return (
    <View>
      {chats.map(chat => (
        <React.Fragment key={chat.id}>
          <NewChatCard
            name={chat.data().users.find(x => x == auth()?.currentUser?.email)}
            lastMessage={chat
              .data()
              .users.find(x => x == auth()?.currentUser?.email)}
            style={styles.chatCard}
          />
          <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
            <View style={styles.iconContainer}>
              <Icon name="logout" size={24} color="red" />
            </View>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </React.Fragment>
      ))}
    </View>
  );
};

export default Settings;
