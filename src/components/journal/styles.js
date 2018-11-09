import { StyleSheet } from 'react-native';
import { colors, w } from '../../config/styles';

export default StyleSheet.create({
  // top bar
  wrapper: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatarData: {
    flex: 1,
    flexDirection: 'row',
    width: w,
    marginBottom: -200,
  },
  leftData: {
    flex: 1,
    padding: 20,
  },
  rightData: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 20,
  },
  avatar: {
    width: w * 0.6,
    height: w * 0.6,
  },
  cloneName: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: -5,
  },
  life: {
    backgroundColor: colors.red,
    marginTop: 3,
    paddingVertical: 2,
    width: 60,
  },
  lifeText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  progressGreen: {
    backgroundColor: colors.green,
    marginTop: 12,
    paddingVertical: 2,
    width: 60,
  },
  progressRed: {
    backgroundColor: colors.red,
    marginTop: 12,
    paddingVertical: 2,
    width: 60,
  },
  // Bottom Bar
  botWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSet: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: w,
    marginVertical: 10,
  },
  textH1: {
    fontSize: 18,
    fontWeight: '600',
  },
  textNum: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: colors.lightGrey,
    borderColor: colors.middleGrey,
    borderRadius: 50,
    paddingTop: 15,
    paddingHorizontal: 20,
    marginHorizontal: 15,
  },
});
