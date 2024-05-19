import { View,Text } from 'react-native'
import { Btn } from './Btn';
import { Colours } from '../Utils/Colours';

export const History = ({onPressEvent}) => {
  return (
    <View>
        <Text>This is a history pannel </Text>
        <Btn value={'Cal'} onPressEvent={onPressEvent}/>
    </View>
  )
}