import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colours } from '../Utils/Colours';

export const Input = ({ inputvalue }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{inputvalue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderWidth:1,
    borderColor:Colours.darkThemeMainColour,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: Colours.darkTheme,
    padding: 10,
    margin: 5,
  },
  inputText: {
    fontSize: 40,
    color: "#CCF783",
  },
});
