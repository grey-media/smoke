import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainTop = () => {
    return (
        <View style={st.mainLogo}>
            <Text style={st.logoText}>SmokeKiller</Text>
            <Text style={st.logoSlogan}>СПАСИ СЕБЯ ОТ СИГАРЕТ</Text>
        </View>
    )
}

const st = StyleSheet.create({
    logoText: {
        fontSize: 50,
        fontWeight: '600',
        color: '#7e7441',
        borderBottomWidth: 10,
        borderBottomColor: '#7e7441',
    },
    logoSlogan: {
        color: '#7e7441',
        fontSize: 22,
        fontWeight: '300',
        paddingTop: 5,
    },
    mainLogo: {
        flex: 1,
        backgroundColor: '#fae146',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { MainTop }