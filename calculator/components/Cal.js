import { useState } from 'react';

import { View,Text ,StyleSheet} from 'react-native';

import { Input } from './Input';
import { Btn } from './Btn';


export const Cal = () => {
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
            setDisplayValue(eval(displayValue))
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
        <View style={styles.cal}>
            <View style={styles.container}>
                <Input inputvalue={displayValue}/>
                <View style={styles.btns}>
                    <Btn value={'1'} onPressEvent={()=>appendValues('1')}/>
                    <Btn value={'2'} onPressEvent={()=>appendValues('2')}/>
                    <Btn value={'3'} onPressEvent={()=>appendValues('3')}/>
                    <Btn value={'4'} onPressEvent={()=>appendValues('4')}/>
                    <Btn value={'5'} onPressEvent={()=>appendValues('5')}/>
                    <Btn value={'6'} onPressEvent={()=>appendValues('6')}/>
                    <Btn value={'7'} onPressEvent={()=>appendValues('7')}/>
                    <Btn value={'8'} onPressEvent={()=>appendValues('8')}/>
                    <Btn value={'9'} onPressEvent={()=>appendValues('9')}/>
                    <Btn value={'0'} onPressEvent={()=>appendValues('0')}/>
                    <Btn value={'+'} onPressEvent={()=>appendValues('+')}/>
                    <Btn value={'-'} onPressEvent={()=>appendValues('-')}/>
                    <Btn value={'*'} onPressEvent={()=>appendValues('*')}/>
                    <Btn value={'/'} onPressEvent={()=>appendValues('/')}/>
                    <Btn value={'('} onPressEvent={()=>appendValues('(')}/>
                    <Btn value={')'} onPressEvent={()=>appendValues(')')}/>
                    <Btn value={'CE'} onPressEvent={()=>clear()}/>
                    <Btn value={'AE'} onPressEvent={()=>deleteLastChar()}/>
                    <Btn value={'='} onPressEvent={()=>handelCalculations()}/>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    cal:{
        display:'grid',
        backgroundColor:'#fff'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'tomato',
    },
    btns:{
        flex:0.5,
        padding:10,
        margin:10,
        backgroundColor:'yellow',
        flexWrap:'wrap',
        marginTop:50,
    }
})
