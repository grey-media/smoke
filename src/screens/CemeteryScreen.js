import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View, ScrollView, Text, Image, ActivityIndicator,
} from 'react-native';
import { Header } from '../components/header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { w, colors } from '../config/styles';
import { auth, database, storage } from '../config/firebase';
import { avatarImage } from '../image/clone_avatar';
import styles from './styles';


class CemeteryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empty: true,
      data: [],
    };
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    database.ref(`clone/${uid}`).orderByChild('health').equalTo(0)
      .on('value', (snap) => {
        const data = snap.val();
        if (data !== null) {
          const dataArr = [];
          Object.keys(data).map((key) => {
            dataArr.push([data[key].name, data[key].avatar, data[key].days, data[key].final]);
          });
          this.setState({ data: dataArr, empty: false });
        }
      });
  }

  render() {
    const {
      empty, data,
    } = this.state;
    const EmptyPage = () => {
      return (
        <View style={styles.mainWrapper}>
          <View style={styles.yellowTopMediumBox}>
            <Text style={styles.yellowTopBigText}>КЛАДБИЩЕ КЛОНОВ</Text>
            <Text style={styles.yellowTopMediumText}>Данные о клонах</Text>
            <Text style={styles.yellowTopSmallText}>безвременно покинувших виртуальный мир</Text>
          </View>
          <View style={styles.blackBotMediumBox}>
            <MaterialCommunityIcons name="skull" size={52} style={{ color: colors.yellow, marginBottom: 50, }} />
            <Text style={{ fontSize: 18, fontWeight: '600', color: colors.yellowBorder }}>Кладбище ваших клонов пусто.</Text>
            <Text style={{ fontSize: 14, color: 'white' }}>Постарайтесь, чтобы это не изменилось.</Text>
            <Image
              style={{ width: w, height: w * 0.6 }}
              source={require('../image/cemetery.png')}
            />
          </View>
        </View>
      );
    };

    if (empty === true) {
      return (<EmptyPage />);
    }

    return (
      <ScrollView>
        <Header
          big="КЛАДБИЩЕ КЛОНОВ"
          medium="Данные о клонах"
          small="безвременно покинувших виртуальный мир"
        />
        <View style={styles.blackBotMediumBoxScroll}>
          <Image
            style={{ width: w, height: w * 0.6, marginTop: -30, }}
            source={require('../image/cemetery.png')}
          />
          <View style={{ paddingVertical: 10 }}>
            {
              data.map((item, id) => (
                <View
                  key={id.toString()}
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    marginVertical: 5,
                    padding: 5,
                    borderWidth: 1,
                    borderColor: colors.brown,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.yellow,
                      paddingTop: 5,
                      paddingHorizontal: 5,
                      width: 85,
                      height: 80,
                    }}
                  >
                    <Image
                      source={avatarImage[item[1]]}
                      style={{ width: 75, height: 75 }}
                    />
                  </View>
                  <View style={{ flex: 1, paddingVertical: 3, paddingHorizontal: 10 }}>
                    <Text style={{ color: colors.yellow }}>Здесь покоится клон {item[0]}</Text>
                    <Text style={{ color: colors.brown, fontSize: 12 }}>Прожил дней: {item[2]}</Text>
                    <Text style={{ color: 'white' }}>{item[3]}</Text>
                  </View>
                </View>
              ))
            }
            <View style={{ paddingHorizontal: 40 }}>
              <Text style={{ color: colors.yellow, textAlign: 'center', paddingTop: 20 }}>
                Кладбище не резиновое. Постарайтесь больше не допустить гибели клонов. Они хоть и виртуальные, но тоже хотят жить.
              </Text>
            </View>
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

  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CemeteryScreen);
