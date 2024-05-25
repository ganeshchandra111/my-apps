import { useState } from 'react';

import { View,Text ,StyleSheet, ScrollView} from 'react-native';

import { Input } from './Input';
import { Btn } from './Btn';
import { History,HistoryData ,data} from './History';

import { Colours } from '../Utils/Colours';


export const CalculatorBody = ({onCalculate}) => {
    let [displayValue,setDisplayValue] = useState('')

    const appendValues = (value) => {

        if (displayValue === 'Error'){
            setDisplayValue(value.toString())
        }else{
            setDisplayValue(displayValue.toString() + value)
        }

    }

    const handelCalculations = () => {
        try{
            
            const result = eval(displayValue).toString()
            onCalculate(displayValue + " = " + result)
            setDisplayValue(result)
            
        }
        catch(error){
            setDisplayValue('Error')
        }
    }

    const clear = () => {
        try{
            setDisplayValue('')
        }catch(error){return}
        
    }

    const deleteLastChar = () => {
        try{
            setDisplayValue(displayValue.slice(0,displayValue.length -1))
        }catch(error){return}
    }

    return (
        <View style={styles.mainbody}>
            <View style={styles.screen}>
                <Input inputvalue={displayValue}/>
            </View>
            <View style={styles.lowerBody}>
                <View style={styles.btns}>
                    <View style={styles.row}>
                        <Btn value={'ADV'} onPressEvent={()=>{}}/>
                        <Btn value={'CLR'} onPressEvent={()=>clear()}/>
                        <Btn value={'Back'} onPressEvent={()=>deleteLastChar()}/>
                        <Btn value={'+'} onPressEvent={()=>appendValues('+')}/>
                    </View>
                    <View style={styles.row}>
                        <Btn value={'1'} onPressEvent={()=>appendValues('1')}/>
                        <Btn value={'2'} onPressEvent={()=>appendValues('2')}/>
                        <Btn value={'3'} onPressEvent={()=>appendValues('3')}/>
                        <Btn value={'-'} onPressEvent={()=>appendValues('-')}/>
                    </View>
                    <View style={styles.row}>
                        <Btn value={'4'} onPressEvent={()=>appendValues('4')}/>
                        <Btn value={'5'} onPressEvent={()=>appendValues('5')}/>
                        <Btn value={'6'} onPressEvent={()=>appendValues('6')}/>
                        <Btn value={'*'} onPressEvent={()=>appendValues('*')}/>
                    </View>
                    <View style={styles.row}>
                        <Btn value={'7'} onPressEvent={()=>appendValues('7')}/>
                        <Btn value={'8'} onPressEvent={()=>appendValues('8')}/>
                        <Btn value={'9'} onPressEvent={()=>appendValues('9')}/>
                        <Btn value={'/'} onPressEvent={()=>appendValues('/')}/>
                    </View>
                    {/* add trigonometry and more  */}
                    <View style={styles.row}>
                        <Btn value={'0'} onPressEvent={()=>appendValues('0')}/>
                        <Btn value={'('} onPressEvent={()=>appendValues('(')}/>
                        <Btn value={')'} onPressEvent={()=>appendValues(')')}/>
                        <Btn value={'='} onPressEvent={()=>handelCalculations()}/>
                    </View>
                    <View style={styles.row}>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainbody:{
        flex:1,
        backgroundColor:Colours.darkTheme,
        flexDirection:'column',
        padding:20,
        justifyContent:'space-around',
    },
    screen:{
        flex:0.2,
        width:280,
        justifyContent:'center',
        marginBottom:10,
        marginTop:-10,
        margin:10,
    },
    lowerBody:{
        flex:0.5,
        padding:10,
        backgroundColor:Colours.darkTheme,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
    },
    btns: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: Colours.darkTheme,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

})
