import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
//подключаем компонент header

import { Header } from '../../src/components/header';
import { BigBtn } from '../components/button';
import styles from './styles';

import {auth, database} from '../config/firebase'

import {fbLogin} from '../middleware/firebase'
class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    render() {
        let errorMessage = 'asd'
        let a = ''

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
                            auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
                                const errorMessage = error.message
                                this.setState({error: errorMessage})
                            })
                            
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
export default (LoginScreen)



