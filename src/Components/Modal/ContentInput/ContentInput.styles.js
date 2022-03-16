import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    height: deviceSize.height / 5,
  },
  modal: {
    margin: 10,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
  },
});
