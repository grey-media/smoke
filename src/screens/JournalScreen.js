import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// подключаем компонент header
import { JournalTop, JournalBot, TextGreen } from '../components/journal';
import { Header } from '../components/header';
import { today } from '../middleware/source';
import { auth, database, storage } from '../config/firebase';

class JournalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // по умолчанию данные не загружены
      clone: '',
      image: '',
      date: '',
      sigarets: '',
      userId: '',
      recordId: '',
      replica: '',
      dif: '',
      load: false,
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
              const cloneData = Object.values(cloneDataObj);
              const cloneKey = Object.keys(cloneDataObj)[0];
              const {
                avatar, health, name,
              } = cloneData[0];
              let newAvatar = '';
              let newHealth = '';
              let newMotivation = '';
              let newTrend = '';
              // определяем тенденцию "бросания курить"
              if (dataArr[1][1] === undefined || dataArr[0][1] === undefined || dataArr[1][1] > dataArr[0][1]) {
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
              newAvatar = `${oldAvatar[0]}_${oldAvatar[1]}_${newHealth}.png`;

              // обновляем аватар
              database.ref(`clone/${uid}/${cloneKey}`).update({
                avatar: newAvatar,
                health: newHealth,
                motivation: newMotivation,
                trend: newTrend,
              });
            });
          } else {
            database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).on('value', (snapshot) => {
              const cloneDataObj = snapshot.val();
              const cloneData = Object.values(cloneDataObj);
              const {
                avatar, health, name, trend, motivation,
              } = cloneData[0];
              storage.ref().child(`clone_avatar/${avatar}`).getDownloadURL().then((url) => {
                // вносим url аватара в стэйт
                this.setState({ image: url });
              });
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
                },
                date: thisDay,
                sigarets: dataArr[0][1],
                userId: uid,
                recordId: dataArr[0][2],
                dif: difference,
                load: true,
              });
            });
          }
        });
    };

    getData();
  }

  render() {
    const { navigation } = this.props;
    const {
      load, clone, image, date, sigarets, userId, recordId, dif, replica,
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
        <Header title="Журнал" />
        {/* передаем часть стэйта в пропсы компонента */}
        <JournalTop clone={clone} img={image} nav={navigation} />
        <TextGreen replica={replica} />
        <JournalBot date={date} sigarets={sigarets} uid={userId} recordId={recordId} dif={dif} />
      </View>
    );
  }
}


export default (JournalScreen);
