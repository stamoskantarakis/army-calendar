import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer';
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


const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#008cd1',
          borderBottomWidth: 2,
          borderBottomColor:"#011f4b",
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft:50,
          fontStyle:'italic'
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
  </Provider>
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
