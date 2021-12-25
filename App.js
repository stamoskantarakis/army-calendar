import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
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
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#134c90',
          borderBottomWidth: 2,
          borderBottomColor:"#011f4b",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft:50
        },
      }}>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          
          options={{ title: 'Το Ημερολόγιο του Σμηνίτη' }}
        />
      <Stack.Screen
        name="DatePicker"
        component={DatePickerScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{ title: 'Το Ημερολόγιο σου' }}
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
