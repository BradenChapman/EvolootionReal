import React from 'react';
import { Text, StyleSheet} from 'react-native';

const BoldText = ({ text }) => {
    return (
        <Text style={ styles.text}>{text}</Text>
    )
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default BoldText;