import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
//подключаем компонент header

import { Header } from '../../src/components/header';
import { BigBtn } from '../components/button';
import styles from './styles';

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

import {fbLogin} from '../source/firebase'

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    render() {

        return (
            <View style={styles.mainWrapper}>
                <Header title='Авторизация' />
                <View style={styles.mainWrapper}>
                    <View style={styles.mainLogo}>
                        <Text style={styles.logoText}>SmokeKiller</Text>
                        <Text style={styles.logoSlogan}>СПАСИ СЕБЯ ОТ СИГАРЕТ</Text>
                    </View>
                    <View style={styles.regForm}>
                        <Text>{this.state.error}</Text>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            placeholder='Электронная почта'
                        />
                        <TextInput
                            style={styles.formInput}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            placeholder='Пароль'
                        />
                        <TouchableOpacity onPress={() => {
                            fbLogin(this.props, this.state.email, this.state.password)
                            }}>
                            <BigBtn btnText='- ВОЙТИ -' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
};
// делаем запрос к бд с выборкой нужных данных и добавляем стейт в пропсы
export default compose(
    
    firebaseConnect(),
    connect((state) => (
        {
        auth: state.firebase.auth,
        data: state.firebase.data
    }))
)(LoginScreen)



