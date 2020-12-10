import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import MainMenu from './components/MainMenu';
import Tips from './components/Tips';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options = {{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
            }
          }}
        />
        <Stack.Screen
          name="Main Menu"
          component={MainMenu}
          options = {{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20
            }
          }}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options = {{
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20
            }
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({

})

export default App;