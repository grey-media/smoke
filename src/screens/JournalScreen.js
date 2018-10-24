import React from 'react';
import {View} from 'react-native';
//подключаем компонент header
import { JournalTop, JournalStat, TextGreen } from '../../src/components/uikit';
import { Header } from '../../src/components/header';
import { TabMenu } from '../../src/components/tabmenu';


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
