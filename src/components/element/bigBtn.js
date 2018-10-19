import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { w } from '../../../constants'

const BigBtn = props => {
    return (
        <TouchableOpacity style={st.btn} onPress={() => props.datas.action.navigate('Home')}>
            <Text style={st.btnText}>{props.datas.text}</Text>
        </TouchableOpacity>
    )
}

const st = StyleSheet.create({
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
});

export { BigBtn }