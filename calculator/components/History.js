import { View,Text,StyleSheet } from 'react-native'
import { useState } from 'react';
import { Btn } from './Btn';
import { Colours } from '../Utils/Colours';

export const History = ({onPressEvent,historyData}) => {

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Btn value={'Cal'} onPressEvent={onPressEvent} style={{width:30}}/>
            </View>
            <View>
                {historyData.map((res,index)=><Text key={index} style={styles.historyItem}>{res}</Text>)}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width:350,
        justifyContent:'top',
        alignItems:'center',
        backgroundColor:Colours.darkTheme,
        borderWidth:1,
        borderColor:Colours.darkThemeMainColour,
        borderRadius:10,

    },
    nav:{
        flex:0.2,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',

    },
    historyItem: {
        margin:10,
        borderWidth:1,
        borderColor:Colours.darkThemeMainColour,
        color:Colours.darkThemeMainColour,
        padding:10,
        borderRadius:10,
        fontSize: 16,
        marginVertical: 5,
    },
    hisBtn: {
        flex:1,
        position:'absolute',
        right:-10,
        top:10,
    },
});
