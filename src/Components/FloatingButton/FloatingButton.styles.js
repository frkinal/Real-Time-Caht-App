import {StyleSheet} from 'react-native';

import colors from '../../Colors/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkgreen,
  },
});
