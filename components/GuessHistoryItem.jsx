import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GuessHistoryItem({ index, guess }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>#{index}</Text>
      </View>

      <View>
        <Text>Opponent`s Guess: {guess}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "hotpink",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "hotpink",
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 8,
  },
});
