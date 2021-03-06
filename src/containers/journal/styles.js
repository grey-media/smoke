import { StyleSheet } from 'react-native';
import { colors, w } from '../../config/styles';

export default StyleSheet.create({
  // top bar
  wrapper: {
    flex: 1,
    backgroundColor: colors.yellow,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
  },
  avatarData: {
    flex: 1,
    flexDirection: 'row',
    width: w,
    marginBottom: -200,
    zIndex: 2,
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
    borderRadius: 4,
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
    borderRadius: 4,
  },
  progressRed: {
    backgroundColor: colors.red,
    marginTop: 12,
    paddingVertical: 2,
    width: 60,
    borderRadius: 4,
  },
  // Bottom Bar
  botWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.white,
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
    borderRadius: 7,
    paddingTop: 15,
    paddingHorizontal: 20,
    marginHorizontal: 15,
  },
  // TEXT GREEN
  textGreenWrapper: {
    backgroundColor: '#52ac62',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 60,
    paddingHorizontal: 30,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  greenTextWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  greenText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  // YESTERDAY
  yesterdayView: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  yesterdayText: {
    fontSize: 18,
    color: colors.brown,
    fontWeight: '600',
    textAlign: 'center',
  },
  yesterdayTextSmall: {
    fontSize: 14,
    color: colors.brown,
    fontWeight: '300',
    textAlign: 'center',
  },
  yesterdayImg: {
    width: w * 0.4,
    height: w * 0.4,
  },
  cloneDieWrapper: {
    alignItems: 'center',
  },
  cloneDieBigText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.yellowBorder,
  },
  cloneDieSmallText: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 5,
  },
  cloneViewMessage: {
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 50,
    flexDirection: 'row',
  },
  cloneViewMessageArrow: {
    width: 15,
    height: 15,
    backgroundColor: colors.white,
    transform: [{ rotate: '45deg' }],
    marginTop: 3,
    marginLeft: -16,
  },
});
