import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GamePanel from "../components/GamePanel";
import { Button } from "../UI/Button";
import { LinearGradient } from "expo-linear-gradient";

const StartScreen = ({ route, navigation }) => {
  const [number, setNumber] = useState(route.params?.number || "");
  const isOver = route.params ? route.params.isOver : false;

  useEffect(() => {
    if (isOver) {
      setNumber("");
    }
  }, [isOver]);

  function resetHandler() {
    setNumber("");
  }

  function submitHandler() {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            onPress: () => setNumber(""),
          },
        ]
      );
      return;
    }
    navigation.navigate("opponentsGuessScreen", {
      number,
    });
  }

  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <SafeAreaView style={styles.container}>
        <Header text={"Guess My Number"} />
        <View style={styles.gamePanel}>
          <GamePanel>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Text style={{ fontSize: 34, color: "plum", fontWeight: "bold" }}>
                Enter a number
              </Text>
              <View style={styles.numberInputContainer}>
                <TextInput
                  value={number}
                  onChangeText={setNumber}
                  keyboardType="numeric"
                  style={{
                    fontSize: 30,
                    textAlign: "center",
                    color: "darkmagenta",
                  }}
                  maxLength={3}
                />
              </View>

              <View style={styles.buttonGroup}>
                <Button onPress={resetHandler} title={"Reset"} />
                <Button onPress={submitHandler} title={"Confirm"} />
              </View>
            </View>
          </GamePanel>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 55,
    height: "100%",
  },
  gamePanel: {
    width: "90%",
  },
  numberInputContainer: {
    borderBottomWidth: 3,
    borderBottomColor: "darkmagenta",
    textAlign: "center",
    width: 50,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
    marginTop: 24,
  },
  numberInput: {},
});
