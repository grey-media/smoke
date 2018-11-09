import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';


const CircleBtn = (props) => {
  const { iconName } = props;
  return (
    <View style={styles.icon}>
      <MaterialCommunityIcons name={iconName} size={32}/>
    </View>
  );
};
export default CircleBtn;
