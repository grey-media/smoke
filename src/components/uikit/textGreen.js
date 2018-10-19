import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const TextGreen = () => {
    return (
        <View style={st.wrapper}>
            <View style={st.textWrapper}>
                <Text style={st.text}>
                     Прекрасный день! Сегодня я занялся спортом и пробежал
                     целых 124 метра без отдышки.
                     
                </Text>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    wrapper: {
        backgroundColor: '#52ac62',
        height: 60,
    },
    textWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    }

});

export { TextGreen }