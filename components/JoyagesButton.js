import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import Colors from '../constants/Colors';

const JoyagesButton = props => {

    const textOrActivity = (isWorking, text) => {
        if (isWorking) {
            return <ActivityIndicator size="small" color="#00ff00" />
        } else {
            return <Text style={{ color: props.solid ? 'white' : Colors.primaryColor }}> {text}</Text >
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
        borderColor: '#CCC',
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
        backgroundColor: Colors.primaryColor
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