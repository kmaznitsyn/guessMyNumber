import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ text, color = "white" }) => {
  return (
    <View style={{ ...styles.container, borderColor: color }}>
      <Text style={{ ...styles.text, color }}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    width: "80%",
    height: 60,
    marginVertical: 15,
  },
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 24,
  },
});
