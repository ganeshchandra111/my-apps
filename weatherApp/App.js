import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  let [inputText, setInputText] = useState('');
  let [looksLike, setLooksLike] = useState('');
  let [temperature, setTemperature] = useState('');
  let [humidity, setHumidity] = useState('');
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);

  const KEY = '352b1295e34f9e9fece4048b9cd232c5';

  const getData = async (inputTextCity) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputTextCity}&appid=${KEY}`);

    if (response.ok) {
      setError(false);
      const data = await response.json();
      setCity(inputTextCity);
      setLooksLike(String(data.weather[0].main));
      const temp = parseInt(data.main.temp - 273.15);
      setTemperature(temp + '°C');
      setHumidity(data.main.humidity);
    } else {
      setError(true);
    }
  };

  const dataText = () => (
    <View style={styles.text}>
      <Text style={styles.titleText}>City {city} has:</Text>
      <View style={{ marginLeft: 25 }}>
        <Text style={styles.pText}>Looks like: {looksLike}</Text>
        <Text style={styles.pText}>Temperature: {temperature}</Text>
        <Text style={styles.pText}>Humidity: {humidity}</Text>
      </View>
    </View>
  );

  const errText = () => (
    <Text style={styles.errText}>City can't be found</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput style={styles.input} placeholder='Enter Your City' onChangeText={setInputText} placeholderTextColor="#8A8A8A" />
        <TouchableOpacity style={styles.btn} onPress={() => getData(inputText)}>
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        {error ? errText() : dataText()}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: '#1C1C1C',
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  input: {
    color: '#FFFFFF',
    height: 40,
    width: 220,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FF8C00',
    borderRadius: 10,
    backgroundColor: '#4D4D4D',
  },
  btn: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FF8C00',
    borderRadius: 10,
    backgroundColor: '#FF8C00',
  },
  btnText: {
    color: '#FFFFFF',
  },
  bottom: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    width: '100%',
  },
  errText: {
    color: '#FF8C00',
    fontSize: 16,
    margin: 10,
  },
  text: {
    marginTop: 30,
  },
  titleText: {
    width: 330,
    padding: 5,
    borderWidth: 1.5,
    color: '#FF8C00',
    borderColor: '#FF8C00',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#4D4D4D',
  },
  pText: {
    color: '#FFFFFF',
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#FF8C00',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#4D4D4D',
    textAlign: 'center',
  },
});
