import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Button } from "../UI/Button";
import successImg from "../assets/success.png";

const GameOverScreen = ({ navigation, route }) => {
  const { rounds, number } = route.params;

  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <View style={styles.container}>
        <Header text={"Game Over!"} />
        <View>
          <Image source={successImg} style={styles.imageStyles} />
        </View>
        <Text style={styles.textStyles}>
          Your phone needed {rounds} rounds to guess the number {number}
        </Text>
        <Button
          title={"Start a new game"}
          onPress={() => {
            navigation.navigate("startScreen", {
              isOver: true,
            });
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 95,
    height: "100%",
  },
  imageStyles: {
    height: 330,
    width: 350,
    borderRadius: 190,
    borderColor: "red",
  },
  textStyles: {
    marginVertical: 25,
    fontWeight: "bold",
  },
});

export default GameOverScreen;
