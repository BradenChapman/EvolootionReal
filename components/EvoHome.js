import React from 'react';
import {Text, View} from 'react-native';

const EvoHome = ({navigation}) => {
 
    return (
      <ImageBackground 
        source = {require('../assets/background_image.jpg')}
        style={styles.img}>
          {/* <Button 
              title="Go to details"
              onPress={() => navigation.navigate('Details')}
          /> */}
          <View style={styles.container}> 
              <View style={styles.mainBox}>
                  <View style={styles.leftBox}>
                      <Text style={styles.headerText}>Set Programs</Text>
                      <Text
                       style={styles.text}
                       onPress={() => navigation.navigate('Beginner Main')}>
                       Beginner</Text>
                      <Text style={styles.text}>Intermediate</Text>
                      <Text style={styles.text}>Advanced</Text>
                      <Text style={styles.text}>Athlete</Text>
                  </View>
                  <View style={styles.rightBox}>
                      <Text style={styles.headerText}>Customizable Programs</Text>
                      <Text style={styles.text}>Styles</Text>
                      <Text
                       style={styles.text}
                       onPress={() => navigation.navigate('Exercises')}>
                      Exercises</Text>
                  </View>
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
    singleRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    mainBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 100
    },
    leftBox: {
      paddingLeft: 16,
      alignItems: 'center',
    },
    rightBox: {
      paddingRight: 16,
      alignItems: 'center',
    },
    mainMenuText: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 50
    },
    headerText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    text: {
      fontSize: 13,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      padding: 10
    }
  
      
  })

  export default EvoHome;