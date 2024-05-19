import { View,Text,StyleSheet } from 'react-native'
import { useState } from 'react';
import { Btn } from './Btn';
import { Colours } from '../Utils/Colours';

export const History = ({onPressEvent,historyData}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.noHistory}>{historyData}</Text>
            <Btn value={'Cal'} onPressEvent={onPressEvent}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    historyItem: {
        fontSize: 16,
        marginVertical: 5,
    },
    noHistory: {
        fontSize: 16,
        color: 'grey',
        marginVertical: 5,
    },
});
