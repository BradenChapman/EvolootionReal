import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BeginnerMainListItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.firstRowText}>{item.id}</Text>
            </View>
            <View style={styles.secondRow}>
                <View style={styles.secondRowBox}>
                </View>
                <View style={styles.secondRowBox}>
                    <Text style={styles.secondRowText}>{item.tableName}</Text>
                </View>
                <View style={styles.secondRowBox}>
                    <Text
                     style={styles.secondRowText}
                     onPress={() => navigation.navigate('Beginner Sheet Picker Week 1')}>
                    {item.excelName}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#346fcb',
    },
    firstRow: {
        backgroundColor: '#346fcb',
    },
    firstRowText: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
    },
    secondRow: {
        backgroundColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    secondRowBox: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    secondRowText: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
    },

})

export default BeginnerMainListItem;