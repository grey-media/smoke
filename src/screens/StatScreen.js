import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Header } from '../components/header';
import { auth, database } from '../config/firebase';
import styles from './styles';
import { journalInsertStatistic } from '../actions';
import { SevenDaysGraphic } from '../components/graphics';
import { StickerBig } from '../components/sticker';
import { averageSig, summSig } from '../source/source';

class StatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    const {
      journal,
      insertStatistic,
    } = this.props;
    
    // if store haven't statistic data
    if (journal.statistic === 'empty') {
      // get data
      database.ref(`journal/${uid}/`).orderByChild('date').limitToLast(365)
        .on('value', (snap) => {
          const statData = snap.val();
          const journalStartData = [];
          // add data to array
          Object.keys(statData).map((key) => {
            journalStartData.push([statData[key].date, statData[key].sigarets]);
            // sort data
            return journalStartData.sort().reverse();
          });
          insertStatistic(journalStartData);
        });
    }
  }

  render() {
    const { journal } = this.props;
    const weekData = journal.statistic.slice(0, 7);
    return (
      <ScrollView style={styles.mainWrapperScroll}>
        <Header
          big="СТАТИСТИКА"
          medium="следите за прогрессом"
          small="на пути к здоровой жизни"
        />
        <View style={styles.whiteBotMediumBoxScroll}>
          <SevenDaysGraphic data={weekData} />
          <Text style={styles.whiteBotTitle}>
            Сводка:
          </Text>
          <View style={styles.direction}>
            <StickerBig
              textSmall="Среднее кол-во сигарет в день"
              textBig="ЗА 7 ДНЕЙ"
              val={averageSig(weekData)}
              color="yellow"
            />
            <StickerBig
              textSmall="Среднее кол-во сигарет в день"
              textBig="ЗА ВСЕ ВРЕМЯ"
              val={averageSig(journal.statistic)}
              color="yellow"
            />
          </View>
          <View style={styles.direction}>
            <StickerBig
              textSmall="Сигарет скурено"
              textBig="ЗА 7 ДНЕЙ"
              val={summSig(weekData)}
              color="yellow"
            />
            <StickerBig
              textSmall="Сигарет скурено"
              textBig="ЗА ВСЕ ВРЕМЯ"
              val={summSig(journal.statistic)}
              color="yellow"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    journal: state.journalData,
  };
}

// передаем в пропсы экшены и диспачим их
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    insertStatistic: journalInsertStatistic,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatScreen);
