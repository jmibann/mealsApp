import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import Colors from '../constants/Colors';

const JoyagesButton = props => {

  const textOrActivity = (isWorking, text) => {
    if (isWorking) {
      return <ActivityIndicator size="small" color="#8A2CC6" />
    } else {
      return <Text style={{ color: props.solid ? 'white' : '#290044' }}> {text}</Text >
    }
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={props.solid ? styles.solidContent : styles.emptyContent}>
          {textOrActivity(props.isWorking, props.text)}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#8A2CC6",
    borderRadius: 100,
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  solidContent: {
    width: 200,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#8A2CC6"
  },
  emptyContent: {
    width: 200,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default JoyagesButton;