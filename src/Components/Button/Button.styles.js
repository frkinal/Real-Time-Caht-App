import {StyleSheet} from 'react-native';

import colors from '../../Colors/colors';

const baseStyle = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: colors.darkgreen,
    },
    text: {
      ...baseStyle.text,
      color: '#fff',
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
      borderColor: colors.darkgreen,
      borderWidth: 1,
    },
    text: {
      ...baseStyle.text,
      color: colors.darkgreen,
    },
  }),
};
