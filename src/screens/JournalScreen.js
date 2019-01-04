import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import {
  JournalTop,
  JournalBot,
  TextGreen,
  JournalDie,
} from '../components/journal';
import { Header } from '../components/header';
import { today } from '../middleware/source';
import { auth, database } from '../config/firebase';

class JournalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clone: {},
      sigarets: '',
      userId: auth.currentUser.uid,
      recordId: '',
      replica: '',
      dif: '',
      load: true,
    };
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    const thisDay = today();
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
          if (dataArr[1][1] === undefined) {
            difference = '';
          } else if (dataArr[1][1] === dataArr[0][1]) {
            difference = 'как и за прошлый день';
          } else if (dataArr[1][1] < dataArr[0][1]) {
            const x = dataArr[0][1] - dataArr[1][1];
            difference = `на ${x} больше, чем за прошлый день`;
          } else if (dataArr[1][1] > dataArr[0][1]) {
            const x = dataArr[1][1] - dataArr[0][1];
            difference = `на ${x} меньше, чем за прошлый день`;
          }

          // проверяем, есть ли запись за текущий день
          // если нет, создаем, если да - заносим данные в state
          if (dataArr[0][0] !== thisDay) {
            // заносим новую запись в журнал с текущей датой
            database.ref(`journal/${uid}`).push({ date: today(), sigarets: 0 });
            // получаем текущее состояние клона
            database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).once('value', (snapshot) => {
              const cloneDataObj = snapshot.val();
              if (cloneDataObj !== null) {
                const cloneData = Object.values(cloneDataObj);
                const cloneKey = Object.keys(cloneDataObj)[0];
                const {
                  avatar, health, days, final,
                } = cloneData[0];
                let newAvatar = '';
                let newHealth = '';
                let newMotivation = '';
                let newTrend = '';
                const newDays = days + 1;
                // определяем тенденцию "бросания курить"
                if (dataArr[1][1] === undefined || dataArr[0][1] === undefined || dataArr[1][1] > dataArr[0][1]) {
                  newTrend = 0;
                } else if (dataArr[1][1] === 0 && dataArr[0][1] === 0) {
                  newTrend = 0;
                } else if (dataArr[1][1] === dataArr[0][1]) {
                  newTrend = 1;
                } else {
                  newTrend = 2;
                }
                // вычисляем новое кол-во ХП
                switch (newTrend) {
                  case 0:
                    newHealth = health + 5;
                    newHealth = newHealth > 100 ? 100 : newHealth;
                    break;
                  case 1:
                    newHealth = health - 5;
                    newHealth = newHealth < 0 ? 0 : newHealth;
                    break;
                  case 2:
                    newHealth = health - 10;
                    newHealth = newHealth < 0 ? 0 : newHealth;
                    break;
                  default:
                    newHealth = health;
                    break;
                }
                // выбираем новое сообщение от клона
                // (0(положительное высказывание)rand(случайный номер высказывания)хх(число ХП ))
                const rand = Math.floor(Math.random() * 2) + 1;
                if (newTrend === 0) {
                  newMotivation = `${rand}0${newHealth}`;
                } else {
                  newMotivation = `${rand}1${newHealth}`;
                }

                // выбираем новый аватар
                // разбиваем строку на составляющие
                const oldAvatar = avatar.split('_');
                newAvatar = `${oldAvatar[0]}_${oldAvatar[1]}_${newHealth}`;

                const finalArr = [
                  'Пал в неравном бою с никотиновой зависимостью.',
                  'Пытался спрятать свои проблемы в дыму сигарет.',
                  'Ненавидел сигареты и всеми силами уничтожал их.',
                  'Еще один клон, которому не удалось обмануть смерть.',
                  'Лежит в холодной земле за поступки своего хозяина',
                ];
                // создаем траурную речь
                let newFinal = '';
                // выбираем случайную запись из массива
                if (newHealth === 0) {
                  const r = Math.floor(Math.random() * finalArr.length);
                  newFinal = finalArr[r];
                }

                // обновляем аватар
                database.ref(`clone/${uid}/${cloneKey}`).update({
                  avatar: newAvatar,
                  days: newDays,
                  health: newHealth,
                  motivation: newMotivation,
                  trend: newTrend,
                  final: newFinal,
                });
              }
            });
          } else {
            database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).on('value', (snapshot) => {
              const cloneDataObj = snapshot.val();
              // если нет живых клонов - выдаем страницу "создания нового клона"
              if (cloneDataObj === null) {
                this.setState({
                  clone: {
                    health: 0,
                  },
                  load: true,
                });
                // в остальных случаях выводим инфу о клоне
              } else {
                const cloneData = Object.values(cloneDataObj);
                const {
                  avatar, health, name, trend, motivation,
                } = cloneData[0];
                const [replicaId, ...rest] = motivation;
                const catId = rest.join('');
                database.ref(`replicas/${catId}/${replicaId}`).once('value', (shot) => {
                  const replicaVal = shot.val();

                  this.setState({ replica: replicaVal });
                });

                this.setState({
                  clone: {
                    name: name,
                    health: health,
                    trend: trend,
                    avatar: avatar,
                  },
                  sigarets: dataArr[0][1],
                  recordId: dataArr[0][2],
                  dif: difference,
                  load: true,
                });
              }
            });
          }
        });
    };

    getData();
  }

  render() {
    const { navigation } = this.props;
    const {
      load, clone, sigarets, userId, recordId, dif, replica,
    } = this.state;
    // если загрузка данных не завершена - крутим спинер
    if (load === false) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (clone.health === 0) { // || clone.health === undefined
      return (
        <View style={{ flex: 1 }}>
          <Header title="Журнал" />
          <JournalDie uid={userId} />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header title="Журнал" />
        {/* передаем часть стэйта в пропсы компонента */}
        <JournalTop clone={clone} nav={navigation} />
        <TextGreen replica={replica} />
        <JournalBot sigarets={sigarets} uid={userId} recordId={recordId} dif={dif} />
      </View>
    );
  }
}

// передаем нужные части глобального стэйта в пропсы
function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения
    all: state.cloneData,
  };
}

// конектим стор и экшены с сомпонентом
export default connect(
  mapStateToProps,
)(JournalScreen);
