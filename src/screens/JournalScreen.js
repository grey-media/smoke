import React from 'react';
import { View, Text } from 'react-native';
//подключаем компонент header
import { JournalTop, TextGreen } from '../../src/components/uikit';
import { Header } from '../../src/components/header';
import { TabMenu } from '../../src/components/tabmenu';
import { CircleBtn, BigBtn } from '../components/button';


export default class JournalScreen extends React.Component {

    constructor(props) {
        super(props)

        state = {
            title: 'Журнал'
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* вставляем компонет header и передаем туда значение титла */}
                <Header title={state.title} />
                <JournalTop />
                <TextGreen />
                <View>
                    {/* <BigBtn
                        btnText='- ДОБАВИТЬ СИГАРЕТУ -'
                        btnAction={this.props.navigation.navigate('Home')}
                    /> */}
                    <Text>СКУРЕНО ЗА ДЕНЬ 12 СИГАРЕТ</Text>
                    <Text>на 2 сигареты меньше, чем вчера</Text>
                    <View>
                        {/* <CircleBtn action={this.state.action} iconName={'md-arrow-back'} />
                        <CircleBtn action={this.state.action} iconName={'md-create'} /> */}
                    </View>
                </View>
                <TabMenu />
            </View>
        );
    }
}
