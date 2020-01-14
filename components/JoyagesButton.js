import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import Colors from '../constants/Colors';

const HEIGHT = 50;
const WIDTH = '80%';

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
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
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
    borderRadius: HEIGHT / 2,
    width: WIDTH,
    height: HEIGHT,
    // alignItems: 'center',
    // justifyContent: 'center',
    // overflow: 'hidden'
  },
  solidContent: {
    width: '100%',
    height: '100%',
    borderRadius: HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#8A2CC6"
  },
  emptyContent: {
    width: '50%',
    height: '100%',
    borderRadius: HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default JoyagesButton;