import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

const Header = (props) => {
  const { title } = props;
  return (
    <SafeAreaView style={{ backgroundColor: 'gold' }}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
