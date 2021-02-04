import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Exercise = ({ navigation, nextPage, text, ID}) => {
    return (
        <Text 
            style={ styles.text }
            onPress = {() => navigation.navigate(nextPage, { videoID: ID })}
        >{ text }</Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20
    }
});

export default Exercise;