import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../components/header';
import { auth, database } from '../config/firebase';
import { userInsertData } from '../actions';
import { TwoLinesText } from '../components/textBlock';
import styles from './styles';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { user, insert } = this.props; // денормализуем пропсы
    const { uid } = auth.currentUser; // get user id
    // if user store emty - add data to the store
    if (user.email === '') {
      database.ref(`profile/${uid}/`)
        .on('child_added', (snapshot) => {
          const data = snapshot.val();
          // add uid key/value to the data object
          data.uid = uid;
          // use reduser to insert data to the user store
          insert(data);
        });
    }
  }

  render() {
    const { user } = this.props;
    const name = user.name ? user.name : 'Пока не доступно';
    const sigarets = `было ${user.sigarets} в день`;
    const gender = user.gender === 'male' ? 'Мужской' : 'Женский';
    return (
      <ScrollView style={styles.mainWrapperScroll}>
        <Header
          big="ПРОФАИЛ"
          medium="Расскажите о себе"
          small="и получайте персонализированные данные"
        />
        <View style={styles.whiteBotMediumBoxScroll}>
          <TwoLinesText textBig="eMail:" textSmall={user.email} icon="email-outline" />
          <TwoLinesText textBig="Имя:" textSmall={name} icon="comment-account-outline" />
          <TwoLinesText textBig="Пол:" textSmall={gender} icon="gender-male-female" />
          <TwoLinesText textBig="Сигареты:" textSmall={sigarets} icon="smoking" />
          <Text>
            * Тут скоро появятся новые функции. Надеемся быть полезными для вас и вашего здоровья :)
        </Text>
          <TouchableOpacity
            onPress={() => auth.signOut()}
          >
            <Text style={styles.profileExitText}>
              Выйти из аккаунта
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    insert: userInsertData,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
