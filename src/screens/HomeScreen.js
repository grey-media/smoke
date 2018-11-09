import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import { Header } from '../../src/components/header';
import styles from './styles';
import { BigBtn } from '../components/button';

class HomeScreen extends React.Component {

    render() {

        return (
            <View style={styles.mainWrapper}>
                <Header title='Первый шаг' />
                <View style={styles.mainWrapper}>
                    <View style={styles.mainLogo}>
                        <Text style={styles.logoText}>SmokeKiller</Text>
                        <Text style={styles.logoSlogan}>СПАСИ СЕБЯ ОТ СИГАРЕТ</Text>
                    </View>
                    <View style={styles.mainReg}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <BigBtn btnText='- ВХОД -'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                            <BigBtn btnText='- РЕГИСТРАЦИЯ -'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

export default (HomeScreen)

