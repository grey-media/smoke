import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import styles from './styles';

const TextGreen = (props) => {
  const { replica } = props;
  return (
    <View style={styles.greenWrapper}>
      <Text style={styles.greenText}>
        {replica}
      </Text>
    </View>
  );
};

export default TextGreen;
