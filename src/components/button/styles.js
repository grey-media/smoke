import { StyleSheet } from 'react-native';
import { colors, w } from '../../config/styles';

export default StyleSheet.create({
  btn: {
    backgroundColor: colors.yellow,
    width: w * 0.7,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 25,
    borderColor: colors.yellowBorder,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  icon: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellowBorder,
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn: {
    width: w * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 95,
  },
});
