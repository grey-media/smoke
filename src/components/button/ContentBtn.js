import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


const ContentBtn = (props) => {
  const { text, icon } = props;
  return (
    <View style={styles.contentBtnWrapper}>
      <Ionicons name={icon} size={22} style={styles.contentBtnIcon} />
      <Text style={styles.contentBtnText}>
        {text}
      </Text>
    </View>
  );
};
export default ContentBtn;
