import React from 'react';
import {
  View, ScrollView, Text, Image, ActivityIndicator,
} from 'react-native';
import { Header } from '../components/header';
import { w, colors } from '../config/styles';
import { auth, database, storage } from '../config/firebase';
import { avatarImage } from '../image/clone_avatar';

class CemeteryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      empty: true,
      uid: auth.currentUser.uid,
      data: [],
    };
  }

  componentDidMount() {
    const { uid } = this.state;
    database.ref(`clone/${uid}`).orderByChild('health').equalTo(0)
      .once('value', (snap) => {
        const data = snap.val();
        if (data !== null) {
          const dataArr = [];
          Object.keys(data).map((key) => {
            dataArr.push([data[key].name, data[key].avatar, data[key].days, data[key].final]);
          });
          this.setState({ data: dataArr, load: true, empty: false });
        } else {
          this.setState({ load: true });
        }
      });
  }

  render() {
    const {
      empty, load, data,
    } = this.state;
    const EmptyPage = () => {
      return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Header title="Кладбище клонов" />
          <View>
            <Image
              style={{ width: w, height: w * 0.6 }}
              source={require('../image/cemetery.png')}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: colors.yellowBorder }}>Кладбище ваших клонов пусто.</Text>
            <Text style={{ fontSize: 14, color: 'white' }}>Постарайтесь что бы это не изменилось.</Text>
          </View>
        </View>
      );
    };
    const LoadPage = () => {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    };

    if (empty === true) {
      return (<EmptyPage />);
    }
    if (load === false) {
      return (<LoadPage />);
    }
    return (
      <ScrollView style={{ backgroundColor: 'black' }}>
        <Header title="Кладбище клонов" />
        <View>
          <Image
            style={{ width: w, height: w * 0.6 }}
            source={require('../image/cemetery.png')}
          />
        </View>
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
      </ScrollView>
    );

  }
}


export default (CemeteryScreen);
