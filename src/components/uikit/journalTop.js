import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { w } from '../../../constants'
import { Ionicons } from '@expo/vector-icons';

const JournalTop = () => {
  return (
    <View style={st.wrapper}>
      <View style={st.avatarData}>
        <View style={st.leftData}>
          <Text>Клон</Text>
          <Text style={st.cloneName}>Валера</Text>
          <View style={st.life}>
            <Text style={st.lifeText}>
              50 %
                        </Text>
          </View>
          <Text style={{ fontSize: 12 }}>Жизнь</Text>
          <View style={st.progress}>
            <Text style={st.lifeText}>
              +5 %
                        </Text>
          </View>
          <Text style={{ fontSize: 12 }}>Прогресс</Text>
        </View>
        <View style={st.rightData}>
          <Ionicons name='md-search' size={32} color='#222' style={{ marginRight: 20 }} />
          <View style={st.sick}>
            <Text style={st.lifeText}>
              12
                        </Text>
          </View>
          <Text style={{ fontSize: 12 }}>Болезни</Text>
        </View>
      </View>

      <Image
        source={require('../../../image/man1.png')}
        style={st.avatar}
      />


    </View>
  )
}

const st = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fae146',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  avatarData: {
    flex: 1,
    flexDirection: 'row',
    width: w,
    marginBottom: -200,
  },
  leftData: {
    flex: 1,
    padding: 20,
  },
  rightData: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 20,
  },
  avatar: {
    width: w * 0.6,
    height: w * 0.6,
  },
  cloneName: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: -5
  },
  life: {
    backgroundColor: '#d84e4b',
    marginTop: 3,
    paddingVertical: 2,
    width: 60,
  },
  lifeText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  progress: {
    backgroundColor: '#52ac62',
    marginTop: 12,
    paddingVertical: 2,
    width: 60,
  },
  sick: {
    backgroundColor: '#503562',
    marginTop: 7,
    paddingVertical: 2,
    width: 60,
  }


});

export { JournalTop }