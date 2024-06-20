import { StyleSheet, ImageBackground, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./screens/StartScreen";
import GameOverScreen from "./screens/GameOverScreen";
import OpponentsGuessScreen from "./screens/OpponentsGuessScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="startScreen" component={StartScreen} />
        <Stack.Screen name="gameoverScreen" component={GameOverScreen} />
        <Stack.Screen
          name="opponentsGuessScreen"
          component={OpponentsGuessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
