import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

// only yellow color
const TwoLinesText = (props) => {
  const { textBig, textSmall, icon } = props;

  return (
    <View style={styles.twoLinesWrapper}>
      <View style={styles.twoLinesBigTextWrapper}>
        <MaterialCommunityIcons name={icon} size={36} style={styles.twoLinesIcon} />
        <Text style={styles.twoLinesBigText}>{textBig}</Text>
      </View>
      <Text style={styles.twoLinesSmallText}>{textSmall}</Text>
    </View>
  );
};
export default TwoLinesText;
