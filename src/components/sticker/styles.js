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
    textAlign: 'center',
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
  yellowTextBig: {
    color: colors.brown,
    fontWeight: '600',
    fontSize: 18,
    marginTop: 7,
    textAlign: 'center',
  },
  bigYellowWrapper: {
    backgroundColor: colors.yellow,
    width: '48%',
    height: 220,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  bigYellowWrapperCircle: {
    backgroundColor: colors.brown,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: colors.yellowBorder,
    height: 70,
    width: 70,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigYellowVal: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 18,
  },

});
