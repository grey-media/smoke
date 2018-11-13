import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  const { title } = props;
  return (
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );
};

export default Header;
