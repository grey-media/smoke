import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CircleBtn, BigBtn } from '../button';
import { today } from '../../middleware/source';
import { database } from '../../config/firebase';
import styles from './styles';


const addSigarets = (sigarets, uid, recordId) => {
  const newSigarets = sigarets + 1;
  database.ref(`journal/${uid}/${recordId}`).update({ sigarets: newSigarets });
};

const removeSigarets = (sigarets, uid, recordId) => {
  if (sigarets > 0) {
    const newSigarets = sigarets - 1;
    database.ref(`journal/${uid}/${recordId}`).update({ sigarets: newSigarets });
  }
};

const sigaretsString = (a) => {
  const b = a % 10;
  let total;
  switch (b) {
    case 1:
      total = `${a} СИГАРЕТА`;
      break;
    case (2, 3, 4):
      total = `${a} СИГАРЕТЫ`;
      break;
    case (11, 12, 13, 14):
      total = `${a} СИГАРЕТ`;
      break;
    default:
      total = `${a} СИГАРЕТ`;
      break;
  }
  return total;
};


const JournalBot = (props) => {
  const {
    sigarets, uid, recordId, dif,
  } = props;

  return (
    <View style={styles.botWrapper}>
      <Text style={styles.textH1}>СКУРЕНО ЗА ДЕНЬ</Text>
      <View style={styles.buttonSet}>
        <TouchableOpacity onPress={() => { removeSigarets(sigarets, uid, recordId); }}>
          <CircleBtn iconName="minus" />
        </TouchableOpacity>
        <Text style={styles.textNum}>
          {sigaretsString(sigarets)}
        </Text>
        <TouchableOpacity onPress={() => { addSigarets(sigarets, uid, recordId); }}>
          <CircleBtn iconName="plus" />
        </TouchableOpacity>
      </View>
      <Text>{ dif }</Text>
    </View>
  );
};
export default JournalBot;
