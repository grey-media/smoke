import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleBtn, WhiteContentBigBtn } from '../../components/button';
import { auth, database } from '../../config/firebase';
import styles from './styles';
import {
  journalInsertToday,
  journalInsertYesterday,
  journalInsertBefore,
  journalInsertAll,
  dataUpdateMessage,
} from '../../actions';
import {
  today,
  getSortJournalData,
  sigaretsToString,
  sigaretsDifference,
  cloneMessage,
} from '../../source/source';
import {
  fbAddSigarets,
  fbRemoveSigarets,
} from '../../source/firebase';

class CalcSigaretsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      insertToday,
      insertYesterday,
      insertAll,
    } = this.props;
    const { uid } = auth.currentUser;
    const thisDay = today();

    database.ref(`journal/${uid}/`).orderByChild('date').endAt(thisDay).limitToLast(3)
      .on('value', (snapshot) => {
        const snap = snapshot.val();
        // get sort journall array
        const data = getSortJournalData(snap);
        if (data[2] !== undefined) {
          insertAll(data);
        } else {
          insertToday(data[0]);
          insertYesterday(data[1]);
        }
      });
  }

  render() {
    const {
      journal,
      appData,
      day,
      updateMessage,
    } = this.props;
    const { uid } = auth.currentUser;
    // correct start data depending on the screens
    let sigaretsNow = journal.today.sigarets;
    let sigaretsBefore = journal.yesterday.sigarets;
    let sigaretsKey = journal.today.key;
    if (day === 'yesterday') {
      sigaretsNow = journal.yesterday.sigarets;
      sigaretsBefore = journal.before.sigarets;
      sigaretsKey = journal.yesterday.key;
    }

    // get difference record
    const difference = sigaretsDifference(sigaretsNow, sigaretsBefore);
    // get sigarets number and word
    const sigaretsStringText = sigaretsToString(sigaretsNow);
    return (
      <View style={styles.botWrapper}>
        <Text style={styles.textH1}>СКУРЕНО ЗА ДЕНЬ</Text>
        <View style={styles.buttonSet}>
          <TouchableOpacity onPress={() => {
            fbRemoveSigarets(
              sigaretsNow,
              uid,
              sigaretsKey,
            );
            const message = cloneMessage('good');
            updateMessage(message);
          }}
          >
            <CircleBtn iconName="minus" />
          </TouchableOpacity>
          <Text style={styles.textNum}>
            {sigaretsStringText}
          </Text>
          <TouchableOpacity onPress={() => {
            fbAddSigarets(
              sigaretsNow,
              uid,
              sigaretsKey,
            );
            const message = cloneMessage('bad');
            updateMessage(message);
          }}
          >
            <CircleBtn iconName="plus" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {
          fbRemoveSigarets(
            1,
            uid,
            sigaretsKey,
          );
          const message = cloneMessage('good');
          updateMessage(message);
        }}
        >
          <WhiteContentBigBtn btnText="НЕ КУРЮ" />
        </TouchableOpacity>
        <Text>{difference}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    journal: state.journalData,
    user: state.userData,
    appData: state.appData,
  };
}

// передаем в пропсы экшены и диспачим их
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    insertAll: journalInsertAll,
    insertToday: journalInsertToday,
    insertYesterday: journalInsertYesterday,
    insertBefore: journalInsertBefore,
    updateMessage: dataUpdateMessage,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalcSigaretsView);
