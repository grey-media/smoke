import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { avatarImage } from '../../image/clone_avatar';


const JournalTop = (props) => {
  const { clone, nav } = props;
  const progress = () => {
    let color;
    let hp;
    if (clone.trend === 0) {
      hp = '+5 %';
      color = styles.progressGreen;
    } else if (clone.trend === 1) {
      hp = '-5 %';
      color = styles.progressRed;
    } else {
      hp = '-10 %';
      color = styles.progressRed;
    }
    return [hp, color];
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarData}>
        <View style={styles.leftData}>
          <Text>Клон</Text>
          <Text style={styles.cloneName}>{clone.name}</Text>
          <View style={styles.life}>
            <Text style={styles.lifeText}>
              {clone.health}
            </Text>
          </View>
          <Text style={{ fontSize: 12 }}>Жизнь</Text>
          <View style={progress()[1]}>
            <Text style={styles.lifeText}>
              {progress()[0]}
            </Text>
          </View>
          <Text style={{ fontSize: 12 }}>Прогресс</Text>
        </View>
        <View style={styles.rightData}>
          <TouchableOpacity onPress={() => nav.navigate('Yesterday')}>
            <MaterialCommunityIcons name="arrow-left" size={18} />
            <Text style={{ fontSize: 14, fontWeight: '600' }}>Вчера</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={avatarImage[clone.avatar]}
        style={styles.avatar}
      />
    </View>
  );
};

export default JournalTop;
