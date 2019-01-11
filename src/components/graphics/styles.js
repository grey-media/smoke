import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  sevenDaysWrapper: {

  },
  sevenDaysBigText: {
    fontWeight: '600',
    fontSize: 18,
  },
  sevenDaysSmallText: {
    fontWeight: '600',
    marginBottom: 15,
  },
  sevenDaysDataLine: {
    // flexDirection: 'row',
    marginBottom: 2,
  },
  sevenDaysGreenLine: {
    backgroundColor: colors.green,
    width: '100%',
    height: 21,
    borderRadius: 4,
    alignItems: 'flex-end',
  },
  sevenDaysRedLine: {
    backgroundColor: colors.red,
    width: '50%',
    height: 21,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderLeftWidth: 1,
    borderColor: colors.white,
  },
  sevenDaysLineText: {
    marginTop: -21,
    color: colors.white,
    paddingHorizontal: 10,
    fontWeight: '600',
  },
});
