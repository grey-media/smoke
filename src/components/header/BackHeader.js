import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BackBtn } from '../button';
import styles from './styles';

const Header = (props) => {
  const { title, back } = props;
  return (

    <View style={styles.backHeader}>
      <TouchableOpacity onPress={() => back.goBack()}>
        <BackBtn iconName="arrow-left" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
