import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colours } from '../Utils/Colours';

export const Btn = ({ value, onPressEvent }) => {
  return (
    <View style={{ margin: 2, width: 80, flex: 1 }}>
      <TouchableOpacity style={styles.btnStyle} onPress={onPressEvent}>
        <Text style={styles.btnText}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colours.darkTheme,
    borderRadius: 10,
    borderColor:Colours.darkThemeMainColour,
    borderWidth:2,
    height:50,
    width:60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    color: Colours.darkThemeMainColour,
  },
});
