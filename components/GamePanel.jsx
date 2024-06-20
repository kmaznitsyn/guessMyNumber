import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GamePanel = ({ children, height = 200 }) => {
  return <View style={{ ...styles.container, height }}>{children}</View>;
};

export default GamePanel;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "indianred",
    borderColor: "indianred",
  },
});
