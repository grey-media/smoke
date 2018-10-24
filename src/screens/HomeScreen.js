import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//подключаем компонент header
import { MainTop } from '../../src/components/uikit';
import { Header } from '../../src/components/header';
//подключаем размеры экрана
import { h, w } from '../../constants'

export default class HomeScreen extends React.Component {

    state = {
        title: 'Первый шаг'
    }

    render() {
        return (
            <View style={st.mainWrapper}>
                {/* вставляем компонет header и передаем туда значение титла */}
                <Header title={this.state.title} />
                <View style={st.mainWrapper}>
                    <MainTop />
                    <View style={st.mainReg}>
                        <Text>Registrations {w}{h}</Text>
                        <Button
                            title="Go to Journal"
                            onPress={() => this.props.navigation.navigate('Journal')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

//style
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
    mainWrapper: {
        flex: 1,
    },
    mainLogo: {
        flex: 1,
        backgroundColor: '#fae146',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainReg: {
        flex: 1.8,
    }
});