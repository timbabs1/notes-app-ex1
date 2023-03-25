import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import About from "./screens/About";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Welcome: undefined, // undefined because you aren't passing any params to the welcome screen
    Home: undefined,
    About: undefined
};

type WelcomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Welcome'
>;

type Props = {
    navigation: WelcomeScreenNavigationProp;
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};

const WelcomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.padding}>Welcome to My notes</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.padding}><Text>Go to home screen</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.padding}><Text>Go to about screen</Text></TouchableOpacity>
        </View>
    );
}

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    padding: {
        padding: 20,
    }
});

export default App;
