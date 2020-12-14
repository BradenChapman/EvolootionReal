import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoldText from './BoldText';
import BoldUnderlineText from './BoldUnderlineText';

const Settings = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.underlineText}>Tutorial</Text>
            <Text style={styles.text}>How To Use The App</Text>
            <Text style={styles.underlineText}>Notification for Reassessment (Every 3 months)</Text>
            <Text style={styles.text}>1RM Testing</Text>
            <Text style={styles.text}>Training Goals</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    underlineText: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 20
    }
});

export default Settings;