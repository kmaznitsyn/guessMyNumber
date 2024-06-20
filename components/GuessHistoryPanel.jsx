import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import GuessHistoryItem from "./GuessHistoryItem";

export default function GuessHistoryPanel({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <GuessHistoryItem index={index + 1} guess={item} />
        )}
        keyExtractor={(item, index) => item * Math.random() * 102}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 15,
  },
});
