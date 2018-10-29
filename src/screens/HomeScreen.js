import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
//подключаем компонент header

import { Header } from '../../src/components/header';
import styles from './styles';
import { BigBtn } from '../components/button';

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Journal')}>
                            <BigBtn btnText='- ВХОД -'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                            <BigBtn btnText='- РЕГИСТРАЦИЯ -'/>
                        </TouchableOpacity>
                        <Button
                            title="Go to Journal"
                            onPress={() => this.props.navigation.navigate('Journal')}
                        />
                    </View>
                </View>
            </View>
        );
    }
};
// делаем запрос к бд с выборкой нужных данных и добавляем стейт в пропсы
export default compose(
    firebaseConnect(() => [
        { path: 'users' } // string equivalent 'todos'
    ]),
    connect((state) => ({
        users: state.firebase.data.users,
    }))
)(HomeScreen)

