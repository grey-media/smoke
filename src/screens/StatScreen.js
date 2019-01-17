import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { AdMobBanner, AdMobInterstitial } from 'expo';
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
    this.state = {
      adv: false,
    };
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
    const { adv } = this.state;
    const admob = async () => {
      AdMobInterstitial.setAdUnitID('ca-app-pub-7433331453298293/4207160946'); // Test ID, Replace with your-admob-unit-id
      AdMobInterstitial.setTestDeviceID('EMULATOR');
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
      this.setState({ adv: true });
    };
    if (adv === false) {
      admob();
    }
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
          <View style={styles.banner}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="ca-app-pub-7433331453298293/2925868866" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError}
            />
          </View>
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
          <View style={styles.banner}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="ca-app-pub-7433331453298293/2925868866" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError}
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
