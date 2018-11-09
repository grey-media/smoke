import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth, database, storage } from '../config/firebase';

class TestScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: 'demo1',
    };
  }

  componentDidMount() {
    const { uid } = auth.currentUser;
    database.ref(`clone/${uid}/`).orderByChild('health').startAt(1).once('child_added', (snapshot) => {
      const cloneData = snapshot.val();
      // вносим состояние клона в стэйт
      this.setState({ demo: cloneData.avatar })
      .then(() => {
        this.setState({ demo: 'cloneData.avatar' });
      });
    })

  }

  render() {
    const { demo } = this.state;

    if (demo === 'demo1'){
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading</Text>
      </View>
      )
    }
    console.log(demo);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Test screen</Text>
      </View>
    );
  
}
}

export default (TestScreen);
