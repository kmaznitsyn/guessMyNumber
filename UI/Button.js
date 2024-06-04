
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'crimson',
        borderWidth: 1,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        padding: 5
    }
});
