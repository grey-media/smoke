import { StyleSheet } from 'react-native';
import { colors, w } from '../config/styles';

export default StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    logoText: {
        fontSize: 50,
        fontWeight: '600',
        color: colors.brown,
        borderBottomWidth: 7,
        borderBottomColor: colors.brown,
    },
    logoSlogan: {
        color: colors.brown,
        fontSize: 22,
        fontWeight: '300',
        paddingTop: 5,
    },
    mainLogo: {
        flex: 1,
        backgroundColor: colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainReg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    regForm: {
        flex:2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formInput: {
        width: 280,
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 5,
    }

});