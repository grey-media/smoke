import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import {TabMenuBtn} from '../button';

const TabMenu = () => {
    return (
        <View style={styles.tabMenu}>
        <TabMenuBtn source = {require('../../../image/human.png')} />
        <TabMenuBtn source = {require('../../../image/stat.png')} />
        <TabMenuBtn source = {require('../../../image/bone.png')} />
        <TabMenuBtn source = {require('../../../image/info.png')} /> 
        </View>
    )
}
export default TabMenu; 