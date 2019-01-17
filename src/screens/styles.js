import { StyleSheet } from 'react-native';
import { colors, w } from '../config/styles';

export default StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainWrapperScroll: {
    backgroundColor: colors.white,
  },
  logoPic: {
    width: 80,
    height: 80,
    marginTop: -100,
  },
  error: {
    color: colors.red,
    fontWeight: '600',
    marginBottom: 5,
  },
  reg: {
    fontSize: 16,
    marginTop: 25,
    fontWeight: '600',
  },
  regSmall: {
    fontSize: 14,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.brown,
    marginTop: 15,
  },
  logoText: {
    fontSize: 45,
    fontWeight: '600',
    color: colors.brown,
    borderBottomWidth: 7,
    borderBottomColor: colors.brown,
  },
  logoSlogan: {
    color: colors.brown,
    fontSize: 19,
    fontWeight: '300',
    paddingTop: 5,
  },
  mainLogo: {
    flex: 1,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    width: 280,
    height: 40,
    paddingHorizontal: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.yellowBorder,
  },
  yellowTopMediumBox: {
    flex: 1,
    backgroundColor: colors.yellow,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  yellowTopBigText: {
    fontSize: 24,
    color: colors.brown,
    fontWeight: '600',
    marginBottom: 15,
  },
  yellowTopMediumText: {
    fontSize: 16,
    fontWeight: '600',
  },
  yellowTopSmallText: {
    fontSize: 14,
  },
  blackBotMediumBox: {
    flex: 3,
    backgroundColor: colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    marginTop: -30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  whiteBotMediumBox: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    marginTop: -30,
  },
  whiteBotMediumBoxScroll: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingBottom: 50,
    paddingTop: 30,
    marginTop: -30,
  },
  blackBotMediumBoxScroll: {
    backgroundColor: colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 0,
    paddingBottom: 50,
    paddingTop: 30,
    marginTop: -30,
  },
  whiteBotBigText: {
    fontSize: 24,
    color: colors.middleGrey,
    fontWeight: '600',
    marginTop: -20,
  },
  whiteBotTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
  },
  whiteBotSmallText: {
    fontSize: 16,
    marginBottom: 20,
  },
  profileExitText: {
    textAlign: 'right',
    fontWeight: '600',
    color: colors.middleGrey,
    marginTop: 60,
  },
  banner: {
    alignItems: 'center',
    marginVertical: 7,
  },
});
