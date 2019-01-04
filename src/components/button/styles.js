import { StyleSheet } from 'react-native';
import { colors, w } from '../../config/styles';

export default StyleSheet.create({
  btn: {
    backgroundColor: colors.brown,
    width: 280,
    height: 41,
    paddingTop: 7,
    borderRadius: 5,
    marginTop: 10,
    borderColor: colors.yellowBorder,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
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
