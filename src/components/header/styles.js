import { StyleSheet } from 'react-native';
import { colors} from '../../config/styles';

export default StyleSheet.create({
    header: {
            height: 85,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: colors.yellow,
        },
    title: {
            color: colors.textColor,
            fontSize: 20,
            fontWeight: '600',
            paddingBottom: 15,
    
        },
});    