import {StyleSheet} from 'react-native';
import colors from '../../Colors/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginStart: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  LastMessage: {
    marginTop: 3,
    color: '#565656',
  },
  serprator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e2e2e2',
    marginStart: 15,
    marginEnd: 15,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkgreen,
  },
  textAvatar: {
    fontSize: 20,
    color: '#fff',
  },
});
