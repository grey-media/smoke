import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../config/firebase';
import {
  userUpdateGender,
  userUpdateSigarets,
  userUpdateMail,
  userUpdateUid,
} from '../actions';
import styles from './styles';
import {
  StickerSmallIcon,
  StickerSmall,
} from '../components/sticker';
import {
  fbCreateProfile,
  fbCreateClone,
  fbCreateJournal,
} from '../source/firebase';

class CreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const createStartData = async (uid, sigarets, gender, email) => {
      await fbCreateJournal(uid, sigarets, 0);
      await fbCreateJournal(uid, sigarets, 1);
      await fbCreateProfile(uid, sigarets, gender, email);
      await fbCreateClone(uid, sigarets, gender);
    };

    const {
      updateGender,
      updateSigarets,
      updateUid,
      updateMail,
      user,
    } = this.props;

    if (user.gender === '') {
      return (
        <View style={styles.mainWrapper}>
          <View style={styles.yellowTopMediumBox}>
            <Text style={styles.yellowTopBigText}>ДОБРО ПОЖАЛОВАТЬ!</Text>
            <Text style={styles.yellowTopMediumText}>Ответте на пару вопросов</Text>
            <Text style={styles.yellowTopSmallText}>для составления вашего профиля</Text>
          </View>
          <View style={styles.whiteBotMediumBox}>
            <Text style={styles.whiteBotBigText}>ВАШ ПОЛ:</Text>
            <Text style={styles.whiteBotSmallText}>(влияет только на пол клона)</Text>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  updateGender('male');
                  updateUid(auth.currentUser.uid);
                  updateMail(auth.currentUser.email);
                }}
              >
                <StickerSmallIcon
                  text="МУЖСКОЙ"
                  icon="gender-male"
                  color="yellow"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  updateGender('female');
                  updateUid(auth.currentUser.uid);
                  updateMail(auth.currentUser.email);
                }}
              >
                <StickerSmallIcon
                  text="ЖЕНСКИЙ"
                  icon="gender-female"
                  color="yellow"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }

    if (user.sigarets !== '') {
      createStartData(user.uid, user.sigarets, user.gender, user.email);
    }

    return (
      <View style={styles.mainWrapper}>
        <View style={styles.yellowTopMediumBox}>
          <Text style={styles.yellowTopBigText}>ДОБРО ПОЖАЛОВАТЬ!</Text>
          <Text style={styles.yellowTopMediumText}>Ответте на пару вопросов</Text>
          <Text style={styles.yellowTopSmallText}>для составления вашего профиля</Text>
        </View>
        <View style={styles.whiteBotMediumBox}>
          <Text style={styles.whiteBotBigText}>СКОЛЬКО СИГАРЕТ:</Text>
          <Text style={styles.whiteBotSmallText}>вы обычно выкуриваете за день</Text>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                updateSigarets(5);
              }}
            >
              <StickerSmall
                text="5"
                color="yellow"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateSigarets(10);
              }}
            >
              <StickerSmall
                text="10"
                color="yellow"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateSigarets(15);
              }}
            >
              <StickerSmall
                text="15"
                color="yellow"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                updateSigarets(20);
              }}
            >
              <StickerSmall
                text="20"
                color="yellow"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateSigarets(25);
              }}
            >
              <StickerSmall
                text="25"
                color="yellow"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updateSigarets(30);
              }}
            >
              <StickerSmall
                text="30+"
                color="yellow"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    user: state.userData,
  };
}

// передаем в пропсы экшены и диспачим их
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateGender: userUpdateGender,
    updateUid: userUpdateUid,
    updateMail: userUpdateMail,
    updateSigarets: userUpdateSigarets,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateScreen);
