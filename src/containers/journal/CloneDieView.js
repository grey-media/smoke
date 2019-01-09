import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { BigBtn } from '../../components/button';
import styles from './styles';
import { database } from '../../config/firebase';
import { fbCreateClone } from '../../source/firebase';

const CloneDieView = (props) => {
  const { uid } = props;
  const newClone = () => {
    database.ref(`profile/${uid}/`).once('child_added', (snapshot) => {
      const profileObj = snapshot.val();
      fbCreateClone(uid, profileObj.sigarets, profileObj.gender);
    });
  };

  return (
    <View style={styles.cloneDieWrapper}>
      <Text style={styles.cloneDieBigText}>Ваш клон умер</Text>
      <Text style={styles.cloneDieSmallText}>Попробуйте начать еще раз. На этот раз у вас все получится!</Text>
      <TouchableOpacity onPress={newClone}>
        <BigBtn btnText="- СОЗДАТЬ КЛОНА -" />
      </TouchableOpacity>
    </View>
  );
};

export default CloneDieView;
