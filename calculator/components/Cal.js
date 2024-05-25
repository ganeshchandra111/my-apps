import { useState ,useEffect} from 'react';

import { View,Text ,StyleSheet} from 'react-native';
import AsyncStorage from 'react-native';

import { Input } from './Input';
import { Btn } from './Btn';
import { History } from './History';
import { CalculatorBody } from './CalculatorBody';

import { Colours } from '../Utils/Colours';

export const Cal = () => {
    let [openHistory,setOpenHistory] = useState(false)
    const [historyData, setHistoryData] = useState([]);

    const handelOpenHistory = () => {
        openHistory ? setOpenHistory(false) : setOpenHistory(true)
    }

    useEffect(()=>{
      const loadData = async () =>{
        try{
          const storedHistory = await AsyncStorage.getItem('calHis');
          setHistoryData(JSON.parse(storedHistory));
        }catch(err){
          console.debug("unable to get the data ")
        }
      };

      loadData();
    },[])

    const handleHistoryUpdate = (result) => {
      const updatedHistory = [...historyData, String(result)];
      setHistoryData(updatedHistory);

      try{
        AsyncStorage.setItem('calHis',JSON.stringify(updatedHistory))
      }catch(error){console.debug('something went worng')}
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
        top: 13,
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
