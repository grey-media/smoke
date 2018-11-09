import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TabMenuBtn } from '../button';

const TabMenu = () => {
  return (
    <View style={styles.tabMenu}>
      <TabMenuBtn iconName="human" />
      <TabMenuBtn iconName="chart-bar" />
      <TabMenuBtn iconName="skull" />
      <TabMenuBtn iconName="information-outline" />
    </View>
  );
};

export default TabMenu;
