import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import BoldText from './BoldText';
import BoldUnderlineText from './BoldUnderlineText';

const TrainingPrograms = ({ navigation }) => {
    return(
        <View style={ styles.container }>
            <View style={ styles.programBox }>
                <Text style={ styles.headerText }>Beginner</Text>
                <Text style={ styles.text } onPress={()=>navigation.navigate('Week 1 Chest, Triceps, and Core')}>Initial Strength and Core Conditioning Program</Text>
            </View>
            <View style={ styles.programBox }>
                <Text style={ styles.headerText }>Advanced</Text>
                <Text style={ styles.text }>Compound Combination Program</Text>
                <Text style={ styles.text }>5x5 Strength Program</Text>
                <Text style={ styles.text }>Home Training Program</Text>
            </View>
            <View style={ styles.programBox }>
                <Text style={ styles.headerText }>Athlete</Text>
                <Text style={ styles.text }>Macrocycle Periodization Program</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    programBox: {
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 15,
        textDecorationLine: 'underline',
        marginBottom: 5
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }

});

export default TrainingPrograms;