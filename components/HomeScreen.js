import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({navigation}) => {
 
  return (
    <ImageBackground 
      source = {require('../assets/background_image.jpg')}
      style={styles.img}>
      <View style={styles.container}>
        <View style={styles.emptyBox}></View>
        <View style={styles.mainBox}>
          <Text style={styles.text}>Evoolotion Strength and Conditioning</Text>
          <Text
           style={styles.mainMenuText}
           onPress={() => navigation.navigate('MainMenu')}
           >Main Menu</Text>
        </View>
      </View>
    </ImageBackground>
      

  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
  },
  mainBox: {
    flex: 1
  },
  emptyBox: {
    flex: 1.7
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  mainMenuText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 10
  }

});

export default HomeScreen;