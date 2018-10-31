import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Picker } from 'react-native';
//подключаем компонент header

import { Header } from '../../src/components/header';
import { BigBtn } from '../components/button';
import styles from './styles';

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

import {fbLogin, fbCreateJournal, fbCreateClone} from '../source/firebase'

class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            gender: 'male',
            sigarets: '15',
            error: '',
        };
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    registration = () => {

        const createNewUser = ({ email, password, gender }) => {
            this.props.firebase.createUser(
                { email, password },
                { email, gender }
            ).catch((error) => {
                const errorCode = error.code;
                let errorMessage = ''
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'Такой eMail уже существует';
                        break;
                    case 'auth/weak-password':
                         errorMessage = 'Пароль слишком простой';
                        break;
                    default:
                        errorMessage = 'Заполните все поля корректно';
                  }
                this.setState({
                    error: errorMessage,
                });
            }).then(() => {
                fbLogin(this.props, this.state.email, this.state.password)
            }).then(() => {
                fbCreateJournal(this.props, this.props.auth.uid, this.state.sigarets)
            }).then(() => {
                fbCreateClone(this.props, this.props.auth.uid, this.state.sigarets, this.state.gender)
            }).then(() => {
                this.props.navigation.navigate('Journal')
            })
        }

        createNewUser({
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
        })
    }

    render() {

        return (
            <View style={styles.mainWrapper}>
                <Header title='Регистрация' />
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
                        <Picker
                            selectedValue={this.state.sigarets}
                            style={styles.formInput}
                            onValueChange={(itemValue) => this.setState({ sigarets: itemValue })}>
                            <Picker.Item label="курю меньше 5 сигарет" value="5" />
                            <Picker.Item label="курю от 5 до 10 сигарет" value="10" />
                            <Picker.Item label="курю от 10 до 15 сигарет" value="15" />
                            <Picker.Item label="курю от 15 до 20 сигарет" value="20" />
                            <Picker.Item label="курю больше 20 сигарет" value="25" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.gender}
                            style={styles.formInput}
                            onValueChange={(itemValue) => this.setState({ gender: itemValue })}>
                            <Picker.Item label="Пол: Мужской" value="male" />
                            <Picker.Item label="Пол: Женский" value="female" />
                        </Picker>
                        <TouchableOpacity onPress={this.registration.bind(this)}>
                            <BigBtn btnText='- РЕГИСТРАЦИЯ -' />
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
)(RegistrationScreen)



