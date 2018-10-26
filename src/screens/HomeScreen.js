import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//подключаем компонент header
import { MainTop } from '../../src/components/uikit';
import { Header } from '../../src/components/header';

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
class HomeScreen extends React.Component {
    render() {
        const a = JSON.stringify(this.props.users, null, 4)
        return (
            <View style={st.mainWrapper}>
                <Header title='Первый шаг' />
                <View style={st.mainWrapper}>
                    <Text>{a}</Text>
                    {/* {
                        console.log(Object.entries(this.props.users))
                    } */}
                    <MainTop />
                    <View style={st.mainReg}>
                        <Text>Registrations </Text>
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
