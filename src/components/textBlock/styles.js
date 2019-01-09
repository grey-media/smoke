import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  twoLinesWrapper: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginTop: 10,
    paddingBottom: 20,
  },
  twoLinesBigTextWrapper: {
    flexDirection: 'row',

  },
  twoLinesBigText: {
    color: colors.middleGrey,
    fontSize: 28,
    fontWeight: '600',
  },
  twoLinesSmallText: {
    fontSize: 18,
  },
  twoLinesIcon: {
    color: colors.middleGrey,
    marginRight: 10,
  },
});
