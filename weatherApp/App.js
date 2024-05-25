import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {

  let [inputText,setInputText] = useState('')

  let [looksLike,setLooksLike] = useState('')
  let [Temperature,setTemperature] = useState('')
  let [Humidity,setHumidity] = useState('')
  let [City,setCity] = useState('')

  let [Error,setError] = useState(false)

  const URL ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
  const KEY = '352b1295e34f9e9fece4048b9cd232c5'

  const getData = async (inputTextCity) =>{

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputTextCity}&appid=${KEY}`)

    if(response.ok){
      setError(false)
      const data = await response.json();
      setCity(inputTextCity)
      setLooksLike(String(data.weather[0].main))
      const temp =  (parseInt(data.main.temp-273.15));
      setTemperature(temp + '`C')
      setHumidity(data.main.humidity)
    }
    else{
      setError(true)
    }
  }

  const dataText =()=>(
    <View style={styles.text}>
      <Text style={styles.titleText}>In the City {City} :- </Text>
      <View style={{marginLeft:25}}>
        <Text style={styles.pText}>Looks like : {looksLike} </Text>
        <Text style={styles.pText}>Temperature :  {Temperature} </Text>
        <Text style={styles.pText}>Humidity :  {Humidity} </Text>
      </View>
    </View>
  )

  const errText = () => (
    <Text style={{margin:0,marginTop:10}}>City cant be found</Text>
  )

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput style={styles.input} placeholder='Enter Your City' onChangeText={setInputText}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={()=>getData(inputText)}> 
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>

        {Error  ?  errText() : dataText()}
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
    backgroundColor: '#aaa2',
    flexDirection: 'column',
  },
      top:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFB75E',
        flexDirection:'row',
      },
          input:{
            height: 40,
            width:220,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            marginRight:0,
            borderColor:'#414E55',
            borderRadius:10,
          },
          btn:{
            margin: 12,
            borderWidth:1,
            padding:10,
            borderColor:'#414E55',
            borderRadius:10,
          },
      bottom:{
        flex:2,
        justifyContent:'top',
        alignItems:'center',
        backgroundColor:'#5ECBFF',
      },
        errText:{
          fontSize:50,
          margin:0,
          marginTop:10,
        },
        text:{
          marginTop:30,
        },
          titleText:{
            fontWeight:'bold',
            fontSize:30,
            marginBottom:10,
          },
            pText:{
              fontSize:20,
            },
});
