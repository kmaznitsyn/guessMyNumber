import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GuessHistoryPanel from "../components/GuessHistoryPanel";
import Header from "../components/Header";
import GamePanel from "../components/GamePanel";
import { Button } from "../UI/Button";

let min = 1;
let max = 99;

const OpponentsGuessScreen = ({ navigation, route }) => {
  const number = route.params.number;
  const guesedNumber = parseInt(number);

  const [randomGuess, setRandomGuess] = useState(randomNumber(min, max));
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    if (guesedNumber === randomGuess) {
      navigation.navigate("gameoverScreen", {
        rounds: guesses.length + 1,
        number,
      });
    } else {
      if (!guesses) {
        setGuesses([randomGuess]);
      } else {
        setGuesses([...guesses, randomGuess]);
      }
    }
  }, [randomGuess]);

  function handleHigher() {
    if (guesedNumber < randomGuess) {
      // show alert
      Alert.alert("Don`t lie", "You know that this is wrong...", [
        {
          text: "Sorry",
        },
      ]);
      return;
    }
    min = randomGuess + 1;
    setRandomGuess(randomNumber(min, max));
  }

  function handleLower() {
    if (guesedNumber > randomGuess) {
      // show alert
      Alert.alert("Don`t lie", "You know that this is wrong...", [
        {
          text: "Sorry",
        },
      ]);
      return;
    }
    max = randomGuess - 1;
    setRandomGuess(randomNumber(min, max));
  }

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header text={"Opponent`s Guess"} />

          <View style={styles.headerNumber}>
            <Header color="orange" text={randomGuess} />
          </View>
        </View>

        <View style={{ width: "90%", marginVertical: 25 }}>
          <GamePanel height={130}>
            <View style={styles.gamePanel}>
              <Text style={styles.gamePanelText}>Higher or Lower?</Text>

              <View style={styles.buttonGroup}>
                <Button onPress={handleLower} title={"Lower"} />
                <Button onPress={handleHigher} title={"Higher"} />
              </View>
              <Button
                title="Go back"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
          </GamePanel>
        </View>

        <GuessHistoryPanel items={guesses.reverse()} />
      </View>
    </LinearGradient>
  );
};

export default OpponentsGuessScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 35,
    height: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gamePanel: {
    alignItems: "center",
    justifyContent: "center",
  },
  gamePanelText: {
    fontSize: 28,
    color: "khaki",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
    marginTop: 11,
    marginBottom: 5,
  },
  headerNumber: {
    alignItems: "center",
    width: "80%",
  },
});
