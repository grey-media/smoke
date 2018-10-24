import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const TabMenuBtn = props => {
    return (
        <TouchableOpacity style={styles.navBtn} >
            <Image source = {props.source} style={{width: 32, height: 32}}/>
        </TouchableOpacity>
    )
};
export default TabMenuBtn; 