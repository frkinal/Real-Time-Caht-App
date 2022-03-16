import {StyleSheet} from 'react-native';

import colors from '../../Colors/colors';

export default StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    padding: 10,
    margin: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  header: {
    color: colors.darkgreen,
    margin: 5,
    fontSize: 100,
    textAlign: 'center',
  },
});
