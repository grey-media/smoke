import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const BigBtn = props => {
    return (
        <TouchableOpacity style={styles.btn} onPress={() => props.datas.action.navigate('Home')}>
            <Text style={styles.btnText}>{props.datas.text}</Text>
        </TouchableOpacity>
    )
};
export default BigBtn;