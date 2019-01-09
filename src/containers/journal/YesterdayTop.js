import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContentBtn } from '../../components/button';
import styles from './styles';


const YesterdayTop = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarData}>
        <View style={styles.rightData}>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
            <ContentBtn text="сейчас" icon="md-arrow-forward" />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.yesterdayImg}
        source={require('../../image/clock.png')}
      />
      <View style={styles.yesterdayView}>
        <Text style={styles.yesterdayText}>Тут можно исправить ошибки вчерашнего дня</Text>
        <Text style={styles.yesterdayTextSmall}>но не все :)</Text>
      </View>
    </View>
  );
};

export default YesterdayTop;
