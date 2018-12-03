import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Header } from '../components/header';
import { colors } from '../config/styles';

class InfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    const { navigation } = this.props;
    return (

      <ScrollView style={{ backgroundColor: 'white' }}>
        <Header title="Информация" />
        <View style={{ padding: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: colors.green }}>
            SmokeKiller помогает бросить курить.
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Отмечайте количество скуренных сигарет и отслеживайте прогресс на пути
            к здоровой жизни. В качестве дополнительного стимула, все ваши результаты будут
            отражаться на состоянии клона.
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Ваша задача не дать клону умереть в течении 45 дней. За этот период ваш
            организм научится обходиться без сигарет и пропадет тяга к пагубной привычке.
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Введение в процесс отказа от курения игрового элемента позволяет визуализировать
            ваши достижения и дополнительно мотивировать, демонстрируя негативные последствия
            курения.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '600', color: colors.green, paddingTop: 7 }}>
            Что делать?
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Программа допускает как резкий, так и постепенный отказ от курения. Важно, что бы
            каждый новый день вы уменьшали количество скуриваемых сигарет. В противном случае
            здоровье клона будет уменьшаться и он умрет.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '600', color: colors.green, paddingTop: 7 }}>
            Советы
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Для снижения тяги к курению можно использовать соответствующие спреи, таблетки или
            жевательные резинки. Приобрести их можно в любой аптеке вашего города.
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Старайтесь заменить недостающие перекуры другими действиями. Например съедайте дольку
            яблока каждый раз, когда хотите скурить сигарету.
          </Text>
          <Text style={{ paddingTop: 7 }}>
            Помните, что желание покурить носит волнообразный характер и достаточно переждать
            10-20 минут. В такие моменты мы рекомендуем переключать свое внимание на решение
            приятных для вас вопросов (прочитайте главу книги, напишите пост в соц. сети и т.п.).
            Сосредоточится на 2х вещах у вас не получится и желание покурить быстро отступит.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default (InfoScreen);
