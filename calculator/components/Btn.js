import { View,Text,Button } from 'react-native'

export const Btn = ({value,onPressEvent}) => {
  return (
    <View style={{margin:3,height:50,width:50}}>
        <Button title={value} onPress={onPressEvent}></Button>
    </View>
  )
}