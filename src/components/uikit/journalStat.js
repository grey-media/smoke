import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { w } from '../../../constants'
import { CircleBtn, BigBtn } from '../button';

const JournalStat = props => {
    state = {
        text: '- ДОБАВИТЬ СИГАРЕТУ -',
        action: props.datas.navigate('Home'),
    }
    return (
        <View style={st.wrapper}>
            {/* <BigBtn
                btnText={this.state.text}
                btnAction={this.state.action}
            /> */}
            <Text style={st.textH1}>СКУРЕНО ЗА ДЕНЬ 12 СИГАРЕТ</Text>
            <Text style={st.textGreen}>на 2 сигареты меньше, чем вчера</Text>
            <View style={st.buttonSet}>
                {/* <CircleBtn action={this.state.action} iconName={'md-arrow-back'} />
                <CircleBtn action={this.state.action} iconName={'md-create'} /> */}
            </View>
        </View>

    )
}

const st = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#f3e055',
        width: w * 0.7,
        paddingVertical: 12,
        borderRadius: 50,
        marginBottom: 20,
        borderColor: '#b8ac56',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    textH1: {
        fontSize: 18,
        fontWeight: '600'
    },
    textGreen: {
        fontSize: 16,
        color: '#52ac62',
    },
    buttonSet: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: w,
        marginTop: 20
    },



});

export { JournalStat }