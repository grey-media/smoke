import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// only yellow color
const StickerBig = (props) => {
  const {
    textSmall,
    textBig,
    val,
    color,
  } = props;
  let styleWrapper;
  let styleText;
  let styleWrapperCircle;
  let styleTextBig;
  let styleVal;

  if (color === 'yellow') {
    styleWrapper = styles.bigYellowWrapper;
    styleWrapperCircle = styles.bigYellowWrapperCircle;
    styleVal = styles.bigYellowVal;
    styleText = styles.yellowText;
    styleTextBig = styles.yellowTextBig;
  }
  return (
    <View style={styleWrapper}>
      <View style={styleWrapperCircle}>
        <Text style={styleVal}>{val}</Text>
      </View>
      <Text style={styleText}>{textSmall}</Text>
      <Text style={styleTextBig}>{textBig}</Text>
    </View>
  );
};
export default StickerBig;
