import React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { w } from '../../../constants'
import { Ionicons } from '@expo/vector-icons';
import { BigBtn } from '../element';

const JournalStat = props => {
    state = {
        text: '- ДОБАВИТЬ СИГАРЕТУ -',
        action: props.datas
    }
    return (
        <View style={st.wrapper}>
            <BigBtn datas={this.state}/>
            <Text style={st.textH1}>СКУРЕНО ЗА ДЕНЬ 12 СИГАРЕТ</Text>
            <Text style={st.textGreen}>на 2 сигареты меньше, чем вчера</Text>
            <View style={st.buttonSet}>
                <View style={st.icon}>
                    <Ionicons name='md-arrow-back' size={32} color='#222'/>
                </View>
                <View style={st.icon}>
                    <Ionicons name='md-create' size={32} color='#222' />
                </View>
            </View>
        </View>

    )
}

const st = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#f3e055',
        width: w * 0.7,
        paddingVertical: 12,
        borderRadius: 50,
        marginBottom: 30,
        borderColor: '#b8ac56',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    textH1: {
        fontSize: 18,
        fontWeight: '600'
    },
    textGreen: {
        fontSize: 16,
        color: '#52ac62',
    },
    buttonSet: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: w,
        marginTop: 30
    },
    icon: {
        backgroundColor: '#f3e055',
        borderColor: '#b8ac56',
        borderWidth: 1,
        width: 55,
        height: 55,
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center'
    }


});

export { JournalStat }