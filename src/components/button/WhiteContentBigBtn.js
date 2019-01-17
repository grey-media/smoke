import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const WhiteContentBigBtn = (props) => {
  const { btnText } = props;
  return (
    <View style={styles.whiteContentBigBtnWrapper}>
      <Text style={styles.whiteContentBigBtnText}>{btnText}</Text>
    </View>
  );
};
export default WhiteContentBigBtn;
