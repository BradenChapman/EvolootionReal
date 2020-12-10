import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <Text 
                style={styles.text}
                onPress = {()=>navigation.navigate('Tips')}
                >Tips</Text>
                <Text style={styles.text}>Training Programs</Text>
                <Text style={styles.text}>Exercise Menu</Text>
                <Text style={styles.text}>Settings</Text>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainBox: {
        paddingLeft: 40,
        paddingTop: 40
    },
    text: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20,
        paddingBottom: 40
    }
});

export default MainMenu;