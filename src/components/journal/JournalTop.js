import React from 'react';
import { Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const JournalTop = props => {
    //const image = `../../image/clone_male/${props.clone.avatar}`;
    //console.log(props.img);


    return (
        <View style={styles.wrapper}>
            <View style={styles.avatarData}>
                <View style={styles.leftData}>
                    <Text>Клон</Text>
                    <Text style={styles.cloneName}>{props.clone.name}</Text>
                    <View style={styles.life}>
                        <Text style={styles.lifeText}>
                            {props.clone.health} %
                            </Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>Жизнь</Text>
                    <View style={styles.progress}>
                        <Text style={styles.lifeText}>
                            +5 %
                            </Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>Прогресс</Text>
                </View>
                <View style={styles.rightData}>
                    <Ionicons name='md-search' size={32} color='#222' style={{ marginRight: 20 }} />
                    <View style={styles.sick}>
                        <Text style={styles.lifeText}>
                            12
                            </Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>Болезни</Text>
                </View>
            </View>

            <Image
                // source={require('../../image/clone_male/1_male_50.png')}
                source={{uri: props.img}}
                style = {styles.avatar}
            />


        </View>
    )
};
export default JournalTop;