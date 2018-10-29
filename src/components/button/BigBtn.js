import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const BigBtn = props => {
    return (
        <View style={styles.btn}>
            <Text style={styles.btnText}>{props.btnText}</Text>
        </View>
    )
};
export default BigBtn;