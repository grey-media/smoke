import React from 'react';
import {
  View, Text, ActivityIndicator, Image,
} from 'react-native';
import { JournalBot, YesterdayTop } from '../components/journal';
import { BackHeader } from '../components/header';
import { yesterday } from '../middleware/source';
import { auth, database, storage } from '../config/firebase';

class YesterdayScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // по умолчанию данные не загружены
      sigarets: '',
      userId: '',
      recordId: '',
      dif: '',
      load: false,
    };
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    const thisDay = yesterday();
    const getData = () => {
      database.ref(`journal/${uid}/`).orderByChild('date').endAt(thisDay).limitToLast(3)
        .on('value', (snap) => {
          const journalData = snap.val();
          let dataArr = [];
          Object.keys(journalData).map((key) => {
            dataArr.push(
              [
                journalData[key]['date'],
                journalData[key]['sigarets'],
                key,
              ],
            );
          });
          // сортированный массив с датами, сигаретами и ключами
          dataArr = dataArr.sort().reverse();
          // определяем разницу сигарет
          let difference = '';
          if (dataArr[1] === undefined) {
            difference = '';
          } else 
          if (dataArr[1][1] === dataArr[0][1]) {
            difference = 'как и за прошлый день';
          } else if (dataArr[1][1] < dataArr[0][1]) {
            const x = dataArr[0][1] - dataArr[1][1];
            difference = `на ${x} больше, чем за прошлый день`;
          } else if (dataArr[1][1] > dataArr[0][1]) {
            const x = dataArr[1][1] - dataArr[0][1];
            difference = `на ${x} меньше, чем за прошлый день`;
          }

          this.setState({
            sigarets: dataArr[0][1],
            userId: uid,
            recordId: dataArr[0][2],
            dif: difference,
            load: true,
          });
        });
    };

    getData();
  }

  render() {
    const { navigation } = this.props;
    const {
      load, sigarets, userId, recordId, dif,
    } = this.state;
    // если загрузка данных не завершена - крутим спинер
    if (load === false) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <BackHeader title="Предыдущий день" back={navigation} />
        <YesterdayTop />
        {/* передаем часть стэйта в пропсы компонента */}
        <JournalBot sigarets={sigarets} uid={userId} recordId={recordId} dif={dif} />
      </View>
    );
  }
}


export default (YesterdayScreen);
