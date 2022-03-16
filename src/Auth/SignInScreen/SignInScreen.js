import React, {useState} from 'react';

import {SafeAreaView, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import Button from '../../Components/Button';

import styles from './SignInScreen.styles';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const SignInScreen = ({navigation}) => {
  const [loading, setloading] = useState(false);

  const handleLogin = () => {
    navigation.goBack();
  };
  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Passwords are not the same',
        type: 'danger',
      });
      return;
    }
    try {
      setloading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'User created',
        type: 'success',
      });
      navigation.goBack();
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <TextInput
              autoCapitalize="none"
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              placeholder="Enter Your E-Mail"
              style={styles.input}
            />
            <TextInput
              autoCapitalize="none"
              value={values.password}
              onChangeText={handleChange('password')}
              style={styles.input}
              placeholder="Enter Your Password"
              secureTextEntry={true}
            />
            <TextInput
              autoCapitalize="none"
              value={values.repassword}
              onChangeText={handleChange('repassword')}
              style={styles.input}
              placeholder="Re-Enter Your Password"
              secureTextEntry={true}
            />
            <Button
              text="Sign In"
              theme="primary"
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>
      <Button text="Back" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default SignInScreen;
