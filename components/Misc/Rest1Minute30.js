import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Rest1Minute30 = () => {
    return (
        <Text style={ styles.topText }>
            *Rest 1 minute 30 seconds between sets (perform exercises grouped together before you rest)
        </Text>
    )
};

const styles = StyleSheet.create({
    topText: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default Rest1Minute30;