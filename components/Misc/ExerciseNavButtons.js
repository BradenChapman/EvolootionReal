import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ExerciseNavButtons = ({ navigation, backPage, nextPage }) => {
    return (
        <View style={ styles.buttonRow } >
            <TouchableOpacity onPress = {() => {navigation.navigate(backPage)}}>
                <View style = { styles.nextButton } >
                    <Text style = { styles.buttonText }>Back</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {navigation.navigate(nextPage)}}>
                <View style = { styles.nextButton } >
                    <Text style = { styles.buttonText }>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    )
};

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nextButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: 100,
        height: 30,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default ExerciseNavButtons;