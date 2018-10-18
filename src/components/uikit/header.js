import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Функциональный компонент
// Не имеет своего стэйта
// Получает данные из входных значений функции props
// Используется преимущественно для дизайна
// Выражается в виде стрелочной функции 
const Header = props => {
    return (
        <View style={st.header}>
            <Text style={st.title}>{props.title}</Text>
        </View>
    )
}

const st = StyleSheet.create({
    header: {
        height: 85,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#fae146'
    },
    title: {
        color: '#222',
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 15,

    },
});

export { Header }