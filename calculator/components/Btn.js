import { View,Text,Button } from 'react-native'

export const Btn = ({value,onPressEvent}) => {
  return (
    <View style={{margin:2,width:80,flex:1}}>
        <Button title={value} onPress={onPressEvent}></Button>
    </View>
  )
}