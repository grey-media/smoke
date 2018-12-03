import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { BigBtn } from '../button';
import styles from './styles';
import { colors } from '../../config/styles';
import { database } from '../../config/firebase';
import { fbCreateClone } from '../../middleware/firebase';


const JournalDie = (props) => {

  const { uid } = props;
  const newClone = () => {
    database.ref(`profile/${uid}/`).once('value', (snapshot) => {
      const profileObj = snapshot.val();
      fbCreateClone(uid, profileObj.sigarets, profileObj.gender);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: colors.red, fontWeight: '600' }}>¯\_(ツ)_/¯</Text>
      <Text style={{ fontSize: 24, color: colors.brown, fontWeight: '600' }}>Ваш клон умер</Text>
      <Text style={{
        fontSize: 18, color: colors.brown, paddingHorizontal: 30, textAlign: 'center',
      }}>Попробуйте начать еще раз. На этот раз у вас все получится!</Text>
      <TouchableOpacity onPress={newClone}>
        <BigBtn btnText='- СОЗДАТЬ КЛОНА -' />
      </TouchableOpacity>
    </View>
  );
};

export default JournalDie;
