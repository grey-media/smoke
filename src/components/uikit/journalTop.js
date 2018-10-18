import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const JournalTop = () => {
    return (
        <View style={st.mainLogo}>
            <Image
                source={require('../../../image/men1.png')}
                style={{width: 250, resizeMode: 'contain'}}
               
            />
        </View>
    )
}

const st = StyleSheet.create({
    mainLogo: {
        flex: 1,
        backgroundColor: '#fae146',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export { JournalTop }