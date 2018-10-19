import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { w } from '../../../constants'
const TabMenu = () => {
    return (
        <View style={st.tabMenu}>
            <TouchableOpacity style={st.navBtn}>
                <Ionicons name='md-body' size={32} color='#222' />
            </TouchableOpacity>
            <TouchableOpacity style={st.navBtn}>
                <Ionicons name='md-stats' size={32} color='#222' />
            </TouchableOpacity>
            <TouchableOpacity style={st.navBtn}>
                <Image source={require('../../../image/bone.png')} style={{width: 32, height: 32}}/>
            </TouchableOpacity>
            <TouchableOpacity style={st.navBtn}>
                <Image source={require('../../../image/info.png')} style={{width: 32, height: 32}}/>
            </TouchableOpacity>
        </View>
    )
}

const st = StyleSheet.create({
    tabMenu: {
        backgroundColor: '#fae146',
        height: 60,
        flexDirection: 'row'
    },
    navBtn: {
        width: w*0.25,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export { TabMenu }