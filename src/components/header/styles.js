import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  headerScroll: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  headerBigText: {
    fontSize: 24,
    color: colors.brown,
    fontWeight: '600',
    marginBottom: 15,
  },
  headerMediumText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerSmallText: {
    fontSize: 14,
  },
});
