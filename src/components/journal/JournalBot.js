import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const JournalTop = props => {

    const progress = () => {
        let color, hp;
        if (props.clone.trend === 0) {
            hp = '+5 %';
            color = styles.progressGreen;
        }else if (props.clone.trend === 1) {
            hp = '-5 %';
            color = styles.progressRed;
        }else{
            hp = '-10 %';
            color = styles.progressRed;
        }
        return [hp, color]
    };

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
                    <View style={progress()[1]}>
                        <Text style={styles.lifeText}>
                            {progress()[0]}
                            </Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>Прогресс</Text>
                </View>
                <View style={styles.rightData}>
                    {/*//место под болезни*/}
                </View>
            </View>
            <Image
                source={{uri: props.img}}
                style = {styles.avatar}
            />
        </View>
    )
};
export default JournalTop;