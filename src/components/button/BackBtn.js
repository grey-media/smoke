import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';


const BackBtn = (props) => {
  const { iconName } = props;
  return (
      <MaterialCommunityIcons name={iconName} size={26}  style={styles.backBtn}/>
  );
};
export default BackBtn;
