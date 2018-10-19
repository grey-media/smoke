import React from 'react';
import {View} from 'react-native';
//подключаем компонент header
import { Header, JournalTop, JournalStat, TabMenu, TextGreen } from '../../src/components/uikit';


export default class JournalScreen extends React.Component {
    //определяем стэйт
    state = {
        title: 'Журнал'
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/* вставляем компонет header и передаем туда значение титла */}
                <Header title={this.state.title} />
                <JournalTop />
                <TextGreen />
                <JournalStat datas={this.props.navigation} />
                <TabMenu />
            </View>
        );
    }
}
