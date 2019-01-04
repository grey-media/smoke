import { StyleSheet } from 'react-native';
import { colors, w } from '../config/styles';

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
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

});