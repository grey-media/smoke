import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  yellowWrapper: {
    backgroundColor: colors.yellow,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 10,
  },
  yellowText: {
    fontWeight: '600',
    marginTop: 5,
  },
  yellowIcon: {
    color: colors.brown,
  },
  yellowWrapperSmall: {
    backgroundColor: colors.yellow,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 10,
  },
  yellowTextSmall: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 5,
  },
});
