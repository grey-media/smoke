import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

// only yellow color
const StickerSmall = (props) => {
  const { text, color } = props;
  let styleWrapper;
  let styleText;
  if (color === 'yellow') {
    styleWrapper = styles.yellowWrapperSmall;
    styleText = styles.yellowTextSmall;
  }
  return (
    <View style={styleWrapper}>
      <Text style={styleText}>{text}</Text>
    </View>
  );
};
export default StickerSmall;
