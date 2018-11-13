import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/header';
import { auth, database } from '../config/firebase';

class InfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    const x = database.ref(`journal/UNItLME6ljMni5xuAQMukHf7Psp2`).once('value', (shot) => {
      const replicaVal = shot.val();
      console.log(replicaVal)
    })
  }

  render() {
    const { navigation } = this.props;
    return (

      <View style={{ flex: 1 }}>
        <Header title="Информация" />
        <Text>InfoScreen</Text>
      </View>
    );
  }
}

export default (InfoScreen);
