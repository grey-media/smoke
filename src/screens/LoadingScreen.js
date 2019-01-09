import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator } from 'react-native';
import { auth, database } from '../config/firebase';
import { userUpdateUid } from '../actions';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    auth.onAuthStateChanged((user) => {
      // если пользователь не активирован перенаправляем на регистрацию
      if (user === null) {
        navigation.navigate('Registration');
      } else { // если пользователь авторизирован - проверяем наличие клонов
        database.ref(`clone/${user.uid}/`).limitToLast(1).on('value', (snapshot) => {
          // id clone data is empty - redirect to the CreateScreen, else - to the JournalScreen
          navigation.navigate(snapshot.val() ? 'Tab' : 'Create');
        });
      }
    });

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
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
    updateUid: userUpdateUid,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingScreen);
