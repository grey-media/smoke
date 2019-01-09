import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

// only yellow color
const StickerSmallIcon = (props) => {
  const { text, icon, color } = props;
  let styleWrapper;
  let styleText;
  let styleIcon;
  if (color === 'yellow') {
    styleWrapper = styles.yellowWrapper;
    styleText = styles.yellowText;
    styleIcon = styles.yellowIcon;
  }
  return (
    <View style={styleWrapper}>
      <MaterialCommunityIcons name={icon} size={48} style={styleIcon} />
      <Text style={styleText}>{text}</Text>
    </View>
  );
};
export default StickerSmallIcon;
