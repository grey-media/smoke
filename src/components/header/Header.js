import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = (props) => {
  const { big, medium, small } = props;
  return (
    <View style={styles.headerScroll}>
      <Text style={styles.headerBigText}>{big}</Text>
      <Text style={styles.headerMediumText}>{medium}</Text>
      <Text style={styles.headerSmallText}>{small}</Text>
    </View>
  );
};

export default Header;
