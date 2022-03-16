import React, {useState} from 'react';

import {SafeAreaView, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import Button from '../../Components/Button';
import styles from './LoginScreen.styles';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);


  const handleSignIn = () => {
    navigation.navigate('SignInScreen');
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('Router');
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <TextInput
              autoCapitalize="none"
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              style={styles.input}
              placeholder="Enter Your E-Mail"
            />
            <TextInput
              autoCapitalize="none"
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.input}
              placeholder="Enter Your Password"
              secureTextEntry={true}
            />
            <Button
              text="Login"
              theme="primary"
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>
      <Button text="Sign In" theme="secondary" onPress={handleSignIn} />
    </SafeAreaView>
  );
};

export default LoginScreen;
