import {StyleSheet} from 'react-native';
import colors from '../../Colors/colors';

export default StyleSheet.create({
  chatCard: {
    backgroundColor: '#fff',
    marginTop: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  logout: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 15,
    marginStart: 15,
  },
});
