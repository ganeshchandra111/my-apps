import { View,Text,StyleSheet } from 'react-native'


export const Input = ({inputvalue}) => {
  return (
    <View style={styles.inputStyle}>
        <Text style={{fontSize:40}}>{inputvalue}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  inputStyle:{
    flex:1,
    borderWidth:0.5,
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'#f5f5f5',
    padding:5,
  }

})