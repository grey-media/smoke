import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const BigBtn = (props) => {
  const { btnText } = props;
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>{btnText}</Text>
    </View>
  );
};
export default BigBtn;
