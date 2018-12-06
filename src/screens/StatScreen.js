import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Header } from '../components/header';
import { h, w, colors } from '../config/styles';
import { auth, database } from '../config/firebase';


class StatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: auth.currentUser.uid,
      sigarets: [],
      load: false,
    };
  }

  componentDidMount() {
    const { uid } = this.state;
    database.ref(`journal/${uid}/`).orderByChild('date').limitToLast(300)
      .on('value', (snap) => {
        const statData = snap.val();
        const sigaretsArr = [];    
        Object.keys(statData).map((key) => {
          sigaretsArr.push(statData[key].sigarets);
        });
        this.setState({ sigarets: sigaretsArr.reverse(), load: true, });
      });
  }

  render() {
    const { sigarets, load } = this.state;
    const week = [];
    const dayColor = (sig) => {
      const arr = sig.slice(0, 7).reverse();
      arr.map((item, i) => {
        if (i % 2 === 0) {
          week.push([item, colors.yellow]);
        } else {
          week.push([item, colors.yellowBorder]);
        }
      });
    };
    dayColor(sigarets);

    const averageSig = (arr) => {
      let summ = 0;
      arr.map((item) => {
        summ += item;
      });
      return Math.round(summ / arr.length);
    };

    const averageSigWeek = (arr) => {
      let summ = 0;
      arr.slice(0, 7).reverse().map((item) => {
        summ += item;
      });
      return Math.round(summ / arr.length);
    };

    const summSig = (arr) => {
      let summ = 0;
      arr.map((item) => {
        summ += item;
      });
      return summ;
    };

    const summSigWeek = (arr) => {
      let summ = 0;
      arr.slice(0, 7).reverse().map((item) => {
        summ += item;
      });
      return summ;
    };

    const dinamicSig = (weekSumm, yearSumm) => {
      const result = (weekSumm < yearSumm)
        ? `Вы стали курить на ${Math.round((1 - (weekSumm / yearSumm)) * 100)} % меньше`
        : `Вы стали курить на ${Math.round((1 - (yearSumm / weekSumm)) * 100)} % больше`;
      return result;
    };

    if (load === false) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header title="Статистика" />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: '600', paddingTop: 40, fontSize: 18 }}>Динамика</Text>
          <Text style={{ fontWeight: '600' }}>за последние 7 дней</Text>
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'flex-end' }}>
            {
              week.map((item, id) => (
                <View
                  style={{ height: item[0] * 10, width: w * 0.12, backgroundColor: item[1] }}
                  key={id.toString()}
                />
              ))
            }
          </View>
          <View style={{ flexDirection: 'row' }}>
            {
              week.map((item, id) => (
                <View
                  style={{ width: w * 0.12, alignItems: 'center' }}
                  key={id.toString()}
                >
                  <Text>{item[0]}</Text>
                </View>
              ))
            }
          </View>
          <View style={{ flex: 1, width: w, alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: w * 0.8 }}>
              <Text style={{ fontWeight: '600', fontSize: 16, paddingBottom: 8 }}>Среднее кол-во сигарет в день:</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: w * 0.4 }}>
                  <Text>за 7 дней: {averageSigWeek(sigarets)}</Text>
                </View>
                <View style={{ width: w * 0.4 }}>
                  <Text>
                    за все время: {averageSig(sigarets)}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: w * 0.8 }}>
              <Text style={{ fontWeight: '600', paddingTop: 40, paddingBottom: 8, fontSize: 16 }}>Скурено сигарет:</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: w * 0.4 }}>
                  <Text>за 7 дней: {summSigWeek(sigarets)}</Text>
                </View>
                <View style={{ width: w * 0.4 }}>
                  <Text> за все время: {summSig(sigarets)}</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={{ paddingBottom: 40, paddingTop: 10 }}>
            <Text style={{ fontSize: 18, color: colors.green, fontWeight: '600' }}>{dinamicSig(averageSigWeek(sigarets), averageSig(sigarets))}</Text>
          </View>
        </View>
      </View >
    );
  }
}


export default (StatScreen);
