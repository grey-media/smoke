import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  CloneView,
  CalcSigaretsView,
  TextGreenView,
  CloneDieView,
} from '../containers/journal';
import { auth, database } from '../config/firebase';
import {
  today,
  newCloneTrend,
  newCloneHealth,
  newCloneMotivation,
  newCloneAvatar,
  cloneFinaleMessage,
} from '../source/source';
import styles from './styles';
import { w, colors } from '../config/styles';

class JournalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      navigation,
      journal,
      clone,
    } = this.props;
    const thisDay = today();
    const { uid } = auth.currentUser;

    if (clone.health === 0) {
      return (
        <View style={styles.mainWrapper}>
          <View style={styles.yellowTopMediumBox}>
            <Text style={styles.yellowTopBigText}>КЛАДБИЩЕ КЛОНОВ</Text>
            <Text style={styles.yellowTopMediumText}>Угрюмое место</Text>
            <Text style={styles.yellowTopSmallText}>тут сыро и холодно</Text>
          </View>
          <View style={styles.blackBotMediumBox}>
            <MaterialCommunityIcons name="skull" size={52} style={{ color: colors.yellow, marginBottom: 15 }} />
            <CloneDieView uid={uid} />
            <Image
              style={{ width: w, height: w * 0.6 }}
              source={require('../image/cemetery.png')}
            />
          </View>
        </View>
      );
    }

    if (journal.today.date !== '' && journal.today.date !== thisDay) {
      const newTrend = newCloneTrend(journal.before.sigarets, journal.yesterday.sigarets);
      const newHealth = newCloneHealth(newTrend, clone.health);
      const newMotivation = newCloneMotivation(newTrend, newHealth);
      const newAvatar = newCloneAvatar(newHealth, clone.avatar);
      let finalMessage;
      if (newHealth === 0) {
        finalMessage = cloneFinaleMessage();
      } else {
        finalMessage = '';
      }
      const newDays = clone.days + 1;
      database.ref(`clone/${uid}/${clone.key}`).update({
        avatar: newAvatar,
        days: newDays,
        health: newHealth,
        motivation: newMotivation,
        trend: newTrend,
        final: finalMessage,
      });
      // заносим новую запись в журнал с текущей датой
      database.ref(`journal/${uid}`).push({ date: thisDay, sigarets: 0 });
    }

    return (
      <View style={styles.mainWrapper}>
        {/* передаем часть стэйта в пропсы компонента */}
        <CloneView navigation={navigation} />
        <TextGreenView />
        <CalcSigaretsView day="today" />
      </View>
    );
  }
}

// передаем нужные части глобального стэйта в пропсы
function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения
    clone: state.cloneData,
    journal: state.journalData,
  };
}

// конектим стор и экшены с сомпонентом
export default connect(
  mapStateToProps,
)(JournalScreen);
