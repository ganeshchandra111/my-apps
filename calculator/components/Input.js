import { View,Text,StyleSheet } from 'react-native'


export const Input = ({inputvalue}) => {
  return (
    <View style={styles.inputStyle}>
        <Text>{inputvalue}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  inputStyle:{
    borderWidth:1,
    borderRadius:5,
    width:300,
    height:50,
    justifyContent:'center',
    padding:10,
    margin:15,
  }

})