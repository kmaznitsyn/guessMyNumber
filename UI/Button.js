import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "darkorchid",
    borderWidth: 1,
    borderColor: "lightsalmon",
    borderRadius: 18,
    width: "40%",
  },
  buttonText: {
    color: "white",
    padding: 7,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
