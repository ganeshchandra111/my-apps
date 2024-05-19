import { useState } from 'react';

import { View,Text ,StyleSheet} from 'react-native';

import { Input } from './Input';
import { Btn } from './Btn';
import { History } from './History';
import { CalculatorBody } from './CalculatorBody';

import { Colours } from '../Utils/Colours';

export const Cal = () => {
    let [openHistory,setOpenHistory] = useState(true)
    const [historyData, setHistoryData] = useState('');

    const handelOpenHistory = () => {
        openHistory ? setOpenHistory(false) : setOpenHistory(true)
    }

    const handleHistoryUpdate = (result) => {
        setHistoryData(result);
    };

    return (
        <View style={styles.container}>
          {openHistory ? (
            <History onPressEvent={handelOpenHistory} historyData={historyData}/>
          ) : (
            <View style={styles.mainBody}>
              <View style={styles.hisBtn}>
                <Btn value="H" onPressEvent={handelOpenHistory} />
              </View>
              <CalculatorBody onCalculate={(result)=>handleHistoryUpdate(result)}/>
            </View>
          )}
        </View>
      );
}

const styles = StyleSheet.create({
    hisBtn:{
        position: 'absolute',
        top: 30,
        right: 10,
        zIndex:100,
        flex:1,
        margin:0,
    },
    hisBtnOnHistoryPannel:{
        position: 'absolute',
        right:160,
        top:20,
        zIndex:100,
        flex:1,
        margin:0,
    },
})
