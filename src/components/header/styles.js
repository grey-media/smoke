import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  header: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.yellow,
  },
  backHeader: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: colors.yellow,
  },
  title: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 15,
  },
});
