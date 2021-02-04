import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BoldText from './BoldText';
import BoldUnderlineText from './BoldUnderlineText';

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <Text 
                    style={styles.text}
                    onPress = {()=>navigation.navigate('Tips')}
                >Tips</Text>
                <Text 
                    style={styles.text}
                    onPress = {() => navigation.navigate('Training Programs')}>
                Training Programs</Text>
                <Text
                    style={styles.text}
                    onPress = {() => navigation.navigate('Exercise Menu')}
                >Exercise Menu</Text>
                <Text 
                    style={styles.text}
                    onPress={()=> navigation.navigate('Settings')}
                >Settings</Text>
                <Text 
                    style={styles.text}
                    onPress={()=> navigation.navigate('Video', {videoID: 'CJWBq17pwHQ'})}
                >Bench Press Video</Text>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainBox: {
        marginLeft: 20,
        marginTop: 20
    },
    text: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20,
        paddingBottom: 40,
    }
});

export default MainMenu;