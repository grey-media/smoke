import React from 'react';
import { View, ActivityIndicator, Button } from 'react-native';
// подключаем компонент header
import { TextGreen } from '../components/uikit';
import { JournalTop, JournalBot } from '../components/journal';
import { Header } from '../components/header';
import { TabMenu } from '../components/tabmenu';
import { today } from '../middleware/source';
import { auth, database, storage } from '../config/firebase';
import { TabNavigator } from '../config/routes';

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
      dif: '',
      load: false,
    };
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    const thisDay = today();
    const z = () => {
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
                avatar, health, name, trend,
              } = cloneData[0];
              storage.ref().child(`clone_avatar/${avatar}`).getDownloadURL().then((url) => {
                // вносим url аватара в стэйт
                this.setState({ image: url });
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

    z();



    //   const getJournal = () => {
    //     database.ref(`journal/${uid}/`).orderByChild('date').endAt(today()).limitToLast(1)
    //       .on('value', (snap) => {
    //         // получает объект
    //         let journalData = snap.val();

    //         const record = Object.keys(journalData)[0];
    //         const day = Object.values(journalData[record])[0];
    //         const sigaret = Object.values(journalData[record])[1];
    //         this.setState({
    //           date: day,
    //           sigarets: sigaret,
    //           recordId: record,
    //           load: true,
    //         });

    //         // если последняя запись сделана не сегодня - создаем новую запись
    //         // и обновляем данные клона
    //         if (day !== today()) {
    //           // database.ref(`journal/${uid}`).push({ date: today(), sigarets: 0 });
    //           database.ref(`journal/${uid}/`).orderByChild('date').endAt('2018-12-12').limitToLast(3)
    //             .on('value', (snapshot) => {
    //               journalData = snapshot.val();

    //               let dataArr = [];
    //               Object.keys(journalData).map((key) => {
    //                 dataArr.push(
    //                   [
    //                     journalData[key]['date'],
    //                     journalData[key]['sigarets'],
    //                     key,
    //                   ],
    //                 );
    //               });
    //               // сортированный массив с датами, сигаретами и ключами
    //               dataArr = dataArr.sort();


    //               // const newRecord = Object.keys(journalData)[0];
    //               // const newDay = Object.values(journalData[newRecord])[0];
    //               // const newSigaret = Object.values(journalData[newRecord])[1];

    //               this.setState({
    //                 date: '2018-11-8', // newDay,
    //                 sigarets: '6', // newSigaret,
    //                 recordId: 'asd', // newRecord,
    //                 load: true,
    //               });
    //             });
    //         }


    //       });
    //   };

    //   const getImage = () => {
    //     const { clone } = this.state;
    //     storage.ref().child(`clone_avatar/${clone.avatar}`).getDownloadURL().then((url) => {
    //       // вносим url аватара в стэйт
    //       this.setState({ image: url });
    //     });
    //   };

    //   const getClone = () => {
    //     database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).once('child_added', (snapshot) => {
    //       const cloneData = snapshot.val();
    //       this.setState({ clone: cloneData, userId: uid });
    //     })
    //       .then(() => {
    //         getImage();
    //       });
    //   };

    //   getClone();
    //   getJournal();
  }

  render() {
    const {
      load, clone, image, date, sigarets, userId, recordId, dif,
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
      <View style={{ flex: 1 }}>
        <Header title="Журнал" />
        {/* передаем часть стэйта в пропсы компонента */}
        <JournalTop clone={clone} img={image} />
        <TextGreen />
        <JournalBot date={date} sigarets={sigarets} uid={userId} recordId={recordId} dif={dif} />
      </View>
    );
  }
}


export default (JournalScreen);
