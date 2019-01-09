import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { motivationText } from '../../source/source';
import styles from './styles';

class TextGreenView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { clone } = this.props;
    // get motivations text whis clone data
    const replicaText = motivationText(clone.motivation);
    return (
      <View style={styles.textGreenWrapper}>
        <Text style={styles.greenText}>
          {replicaText}
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    clone: state.cloneData,
  };
}

// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
)(TextGreenView);
