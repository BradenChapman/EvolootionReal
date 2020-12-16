import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import MainMenu from './components/MainMenu';
import Tips from './components/Tips';
import TrainingPrograms from './components/TrainingPrograms';
import ExerciseMenu from './components/ExerciseMenu';
import Settings from './components/Settings';
import ChestAndTriceps from './components/Workouts/ChestAndTriceps';
import BW1CTC from './components/Beginner/BW1CTC';
import BW1LB from './components/Beginner/BW1LB';
import ISACCMain from './components/Beginner/ISACCMain';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          }
        }}
        >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options = {{ title: 'Home' }}
        />
        <Stack.Screen
          name="Main Menu"
          component={MainMenu}
          options = {{ title: 'Main Menu' }}
        />
        <Stack.Screen
          name="Tips"
          component={Tips}
          options = {{ title: 'Tips' }}
        />
        <Stack.Screen
          name="Training Programs"
          component={TrainingPrograms}
          options = {{ title: 'Training Programs' }}
         />
         <Stack.Screen
          name="Exercise Menu"
          component={ExerciseMenu}
          options = {{ title: 'Exercise Menu' }}
         />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options = {{ title: 'Settings' }}
         />
         <Stack.Screen
          name="Chest and Triceps"
          component={ChestAndTriceps}
          options = {{ title: 'Chest and Triceps' }}
         />
         <Stack.Screen
          name="ISACC Home"
          component={ISACCMain}
          options = {{ title: 'ISACC Home' }}
         />
         <Stack.Screen
          name="Beginner Week 1 Chest, Triceps, and Core"
          component={BW1CTC}
          options = {{ title: 'Chest, Triceps, and Core' }}
         />
         <Stack.Screen
          name="Beginner Week 1 Lower Body"
          component={BW1LB}
          options = {{ title: 'Lower Body' }}
         />

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({

})

export default App;