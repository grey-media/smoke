import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';


const TabMenuBtn = (props) => {
  const { iconName } = props;
  return (
    <TouchableOpacity style={styles.navBtn}>
      <MaterialCommunityIcons name={iconName} size={28} />
    </TouchableOpacity>
  );
};
export default TabMenuBtn;
