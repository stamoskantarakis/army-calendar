import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// // import mainReducer from './FriendsReducer';
import HomeScreen from './app/screens/HomeScreen';
import DatePickerScreen from './app/screens/DatePickerScreen'
import ResultScreen from './app/screens/ResultScreen'
// import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Καλώς ήρθες Σμηνίτη!"
        component={HomeScreen}
      />
      <Stack.Screen
        name="DatePicker"
        component={DatePickerScreen}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
