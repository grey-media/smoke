import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { auth, database } from '../../config/firebase';
import styles from './styles';
import { ContentBtn } from '../../components/button';
import { cloneProgressBar } from '../../source/source';
import { avatarImage } from '../../image/clone_avatar';
import { cloneInsertData, cloneUpdateHealth, userUpdateUid } from '../../actions';


class CloneView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {
      clone,
      user,
      updateUid,
      insertCloneData,
      updateHealth,
    } = this.props;
    const { uid } = auth.currentUser;
    // update Uid
    if (user.uid === '') {
      updateUid(uid);
    }
    // update clone data
    if (clone.avatar === '') {
      // get clone whis health > 1
      database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).on('value', (snapshot) => {
        const snap = snapshot.val();
        if (snap === null) {
          updateHealth(0);
        } else {
          const cloneData = snap[Object.keys(snap)[0]];
          // denormilize snap data
          const [key] = Object.keys(snap);
          cloneData.key = key;
          // update clone store data
          insertCloneData(cloneData);
        }
      });
    }
  }

  render() {
    const {
      clone,
      navigation,
    } = this.props;
    // get progress bar text
    const progress = cloneProgressBar(clone.trend);
    // get progress bar color
    const progressColor = clone.trend > 0
      ? styles.progressRed
      : styles.progressGreen;
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatarData}>
          <View style={styles.leftData}>
            <Text>Клон</Text>
            <Text style={styles.cloneName}>{clone.name}</Text>
            <View style={styles.life}>
              <Text style={styles.lifeText}>
                {clone.health}
              </Text>
            </View>
            <Text style={{ fontSize: 12 }}>Жизнь</Text>
            <View style={progressColor}>
              <Text style={styles.lifeText}>
                {progress}
              </Text>
            </View>
            <Text style={{ fontSize: 12 }}>Прогресс</Text>
          </View>
          <View style={styles.rightData}>
            <TouchableOpacity onPress={() => navigation.navigate('Yesterday')}>
              <ContentBtn text="вчера" icon="md-arrow-back" />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={avatarImage[clone.avatar]}
          style={styles.avatar}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    clone: state.cloneData,
    user: state.userData,
  };
}

// передаем в пропсы экшены и диспачим их
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUid: userUpdateUid,
    updateHealth: cloneUpdateHealth,
    insertCloneData: cloneInsertData,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CloneView);
