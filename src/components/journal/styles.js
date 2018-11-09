import { StyleSheet } from 'react-native';
import { colors, w } from '../../config/styles';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fae146',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    avatarData: {
        flex: 1,
        flexDirection: 'row',
        width: w,
        marginBottom: -200,
    },
    leftData:{
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
        marginTop: -5
    },
    life: {
        backgroundColor: '#d84e4b',
        marginTop: 3,
        paddingVertical: 2,
        width: 60,
    },
    lifeText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
        color: '#fff',
    },
    progress: {
        backgroundColor: '#52ac62',
        marginTop: 12,
        paddingVertical: 2,
        width: 60,
    },
    sick: {
        backgroundColor: '#503562',
        marginTop: 7,
        paddingVertical: 2,
        width: 60,
    }
});