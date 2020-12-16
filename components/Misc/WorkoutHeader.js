import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutHeader = ({ weekNumber }) => {
    return (
        <View style={ styles.topRow }>
            <Text style={ styles.topText }>Week {weekNumber}</Text>
            <Text style={ styles.topText }>Date: </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    topText: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default WorkoutHeader;