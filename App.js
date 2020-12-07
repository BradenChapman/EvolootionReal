import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
// import ExerciseScreen from './components/ExerciseScreen';
// import VideoScreen from './components/VideoScreen';
import BeginnerMainScreen from './components/Beginner/BeginnerMainScreen';
import BSPW1 from './components/Beginner/BeginnerSheetPicker';
import ExerciseScreen from './components/ExerciseScreen';
import MainMenu from './components/MainMenu';


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
              backgroundColor: '#888',
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
              backgroundColor: '#111',
            },
            headerTitleStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20
            }
          }}
        />
        <Stack.Screen name="Exercises" component={ExerciseScreen} />
        {/* <Stack.Screen name="Video" component={VideoScreen} /> */}
        <Stack.Screen name="Beginner Main" component={BeginnerMainScreen} />
        {/* <Stack.Screen name="Beginner Sheet Week 1" component={BSW1} /> */}
        <Stack.Screen name="Beginner Sheet Picker Week 1" component={BSPW1} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({

})

export default App;