import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
//подключаем компонент header
import { TextGreen } from '../../src/components/uikit';
import { JournalTop } from '../components/journal'
import { Header } from '../../src/components/header';
import { TabMenu } from '../../src/components/tabmenu';
import { CircleBtn, BigBtn } from '../components/button';

import { auth, database, storage } from '../config/firebase';

import styles from './styles';

class JournalScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            load: true,
            clone: '',
            image: ''
        }
    }

    componentDidMount() {
        this.setState({ load: false });
        const uid = auth.currentUser.uid;

        database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).once('child_added', snapshot => {
            const cloneData = snapshot.val();
            this.setState({ clone: cloneData, load: true })
        }).then((clone) => {
            storage.ref().child(`clone_avatar/${clone.val().avatar}`).getDownloadURL().then(url => {
                this.setState({image: url});
            })
        });
        database.ref(`journal/${uid}/`).orderByChild('date').endAt('2018-10-31').limitToLast(3).once('value', snap => {
            // получает объект
            const journalData = snap.val();
            // разбираем объект
            for (let i in journalData) {
                for (let j in journalData[i]){
                    //console.log(journalData[i][j])
                }
            }
        })
    }

    render() {
        if(this.state.load === false) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return(
            <View style = {{ flex: 1 }}>
                {/* вставляем компонет header и передаем туда значение титла */ }
                < Header title = 'Журнал' />
                <JournalTop clone={this.state.clone} img={this.state.image} />
                <TextGreen />
                <View>
                    <BigBtn
                        btnText='- ДОБАВИТЬ СИГАРЕТУ -'
                        btnAction='asd'
                    />
                    <Text>СКУРЕНО ЗА ДЕНЬ 12 СИГАРЕТ</Text>
                    <Text>на 2 сигареты меньше, чем вчера</Text>
                    <View>
                        <CircleBtn action='asd' iconName={'md-arrow-back'} />
                        <CircleBtn action='asd' iconName={'md-create'} />
                    </View>
                </View>
                <TabMenu />
            </View >
        );
    }
}


export default (JournalScreen)