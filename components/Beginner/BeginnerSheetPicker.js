import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutSheetPicker = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.whichText}>Which workout would you like to view?</Text>
            <View style={styles.textBoxBlue}>
                <Text
                onPress={() => navigation.navigate('Beginner Sheet Week 1 BTC')}
                style={styles.workoutTextGrey}
                >Chest, Triceps & Core</Text>
            </View>
            <View style={styles.textBoxGrey}>
                <Text
                onPress={() => navigation.navigate('Sheet')}
                style={styles.workoutTextBlue}
                >Lower Body</Text>
            </View>
            <View style={styles.textBoxBlue}>
                <Text
                onPress={() => navigation.navigate('Sheet')}
                style={styles.workoutTextGrey}
                >Back, Shoulders, and Biceps</Text>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBoxGrey: {
        backgroundColor: '#ccc',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    textBoxBlue: {
        backgroundColor: '#346fcb',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    whichText: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: 30,
        paddingRight: 30,
    },
    workoutTextBlue: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
    },
    workoutTextGrey: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
    },

});

export default WorkoutSheetPicker;