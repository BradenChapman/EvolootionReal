import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Exercise from '../Misc/Exercise';

const DATA = [
    { id:'Week 1 Chest, Triceps, and Core',     next: 'Beginner Week 1 Chest, Triceps, and Core' },
    { id:'Week 1 Lower Body',                   next: 'Beginner Week 1 Lower Body' },
    { id:'Week 1 Back, Shoulders, and Biceps',  next: 'tbd' },
];

const ChestAndTriceps = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Exercise navigation={navigation} nextPage={item.next} text={item.id}></Exercise>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor = {item => item.id}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
    },
});

export default ChestAndTriceps;