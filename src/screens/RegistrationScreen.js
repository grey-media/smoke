import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { BigBtn } from '../components/button';
import { auth } from '../config/firebase';
import styles from './styles';
import { colors } from '../config/styles';

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
    const { navigation } = this.props;
    const { email, password, error } = this.state;

    return (
      <View style={styles.mainWrapper}>
        <View style={styles.mainWrapper}>
          <View style={styles.mainLogo}>
            <Image
              source={require('../image/icon.png')}
              style={styles.logoPic}
            />
            <Text style={styles.logoText}>SmokeKiller</Text>
            <Text style={styles.logoSlogan}>СПАСИ СЕБЯ ОТ СИГАРЕТ</Text>
            <Text style={styles.reg}>Зарегестрируйтесь</Text>
            <Text style={styles.regSmall}>для сохранения прогресса</Text>
            <Text style={styles.error}>{error}</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={(email) => this.setState({ email })}
              value={email}
              placeholder="e-Mail"
              underlineColorAndroid={colors.white}
              placeholderTextColor={colors.middleGrey}
            />
            <TextInput
              style={styles.formInput}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={password}
              placeholder="Пароль"
              underlineColorAndroid={colors.white}
              placeholderTextColor={colors.middleGrey}
            />
            <TouchableOpacity onPress={() => {
              auth.createUserWithEmailAndPassword(email, password)
                .catch((alert) => {
                  const errorMessage = alert.message;
                  this.setState({ error: errorMessage });
                });
            }}
            >
              <BigBtn btnText="- РЕГИСТРАЦИЯ -" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>
                Я уже зерегестрирован
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
// делаем запрос к бд с выборкой нужных данных и добавляем стейт в пропсы
export default (LoginScreen);
