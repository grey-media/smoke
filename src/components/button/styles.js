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
    borderColor: colors.brown,
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
    width: 48,
    height: 48,
    borderRadius: 7,
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
  contentBtnWrapper: {
    width: 50,
    height: 50,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.brown,
  },
  contentBtnIcon: {
    color: colors.brown,
  },
  contentBtnText: {
    color: colors.brown,
    marginTop: -3,
    fontSize: 11,
  },
  whiteContentBigBtnWrapper: {
    backgroundColor: colors.yellow,
    width: 250,
    height: 41,
    paddingTop: 9,
    borderRadius: 5,
    marginTop: 10,
    borderColor: colors.yellowBorder,
    borderWidth: 1,
  },
  whiteContentBigBtnText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
});
