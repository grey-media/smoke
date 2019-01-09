import React from 'react';
import { View } from 'react-native';
import { CalcSigaretsView, YesterdayTop } from '../containers/journal';
import styles from './styles';

class YesterdayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainWrapper}>
        <YesterdayTop navigation={navigation} />
        {/* передаем часть стэйта в пропсы компонента */}
        <CalcSigaretsView day="yesterday" />
      </View>
    );
  }
}


export default (YesterdayScreen);
