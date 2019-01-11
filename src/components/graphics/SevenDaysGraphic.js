import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { colors } from '../../config/styles';
import {
  statisticLineWidth,
  sigaretsToStringLine,
} from '../../source/source';

// only yellow color
const SevenDaysGraphic = (props) => {
  const { data } = props;
  let dataArr = [];
  if (data.length > 0 && data !== 'empty') {
    dataArr = data;
  }

  return (
    <View style={styles.sevenDaysWrapper}>
      <Text style={styles.sevenDaysBigText}>Динамика</Text>
      <Text style={styles.sevenDaysSmallText}>за последние 7 дней</Text>
      {
        dataArr.map((item, id) => (
          <View style={styles.sevenDaysDataLine} key={id.toString()}>
            <Text>{item[0]}</Text>
            <View style={styles.sevenDaysGreenLine}>
              <View style={{
                backgroundColor: colors.red,
                width: statisticLineWidth(item[1]),
                height: 21,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
              }}
              />
              <Text style={styles.sevenDaysLineText}>{sigaretsToStringLine(item[1])}</Text>
            </View>
          </View>
        ))
      }
    </View>
  );
};
export default SevenDaysGraphic;
