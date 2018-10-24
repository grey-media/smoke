import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


const CircleBtn = props => {
    return (
        <TouchableOpacity style={styles.icon} onPress={() => props.action.navigate('Home')}>
            <Ionicons name={props.iconName} size={32} color='#222'/>
        </TouchableOpacity>
    )
};
export default CircleBtn; 