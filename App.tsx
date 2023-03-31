import "react-native-gesture-handler";
import "react-native-get-random-values";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import About from "./screens/About";

type RootStackParamList = {
  Welcome: undefined; // undefined because you aren't passing any params to the welcome screen
  Home: undefined;
  About: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <NotesStack />
    </NavigationContainer>
  );
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.padding}>Welcome to My Notes</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={[styles.padding, styles.margin, styles.bgColor]}
      >
        <Text>Go to home screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={[styles.padding, styles.margin, styles.bgColorSecondary]}
      >
        <Text>Go to about screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const NotesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  padding: {
    padding: 20,
  },
  margin: {
    margin: 10,
  },
  bgColor: {
    backgroundColor: "#2f9de3",
  },
  bgColorSecondary: {
    backgroundColor: "#5b6bda",
  },
});

export default App;
