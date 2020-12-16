import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Rest1Minute = () => {
    return (
        <Text style={ styles.topText }>
            *Rest 1 minute between sets
        </Text>
    )
};

const styles = StyleSheet.create({
    topText: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default Rest1Minute;