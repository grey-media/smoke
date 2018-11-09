import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import {auth} from '../config/firebase'

export default class LoadingScreen extends React.Component {

    render() {  
        //auth.signOut()

        // если пользователь не активирован перенаправляем на авторизацию
        // если авторизирован - на журнал
        const a = auth.onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Journal' : 'Home')
        });

    
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}


