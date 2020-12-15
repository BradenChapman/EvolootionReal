import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Exercise from '../Misc/Exercise';

const DATA = [
    { id:'Barbell Bench Press',              data: 'tbd' },
    { id:'Barbell Incline Press',            data: 'tbd' },
    { id:'Bosu Ball Push-Ups',               data: 'tbd' },
    { id:'Cable Fly',                        data: 'tbd' },
    { id:'Chest Press (3 ROM)',              data: 'tbd' },
    { id:'Deep ROM Dips',                    data: 'tbd' },
    { id:'Deep ROM Push-Ups',                data: 'tbd' },
    { id:'Dips',                             data: 'tbd' },
    { id:'Dumbbell Bench Press',             data: 'tbd' },
    { id:'Dumbbell Fly',                     data: 'tbd' },
    { id:'Dumbbell Incline Press',           data: 'tbd' },
    { id:'Dumbbell Incline Press (ball)',    data: 'tbd' },
    { id:'Flex Band Bench Press',            data: 'tbd' },
    { id:'Flex Band Push-Ups',               data: 'tbd' },
    { id:'Incline Press Fly Combo',          data: 'tbd' },
    { id:'Iso/Bi-Lateral Bench Press',       data: 'tbd' },
    { id:'Iso/Bi-Lateral Fly',               data: 'tbd' },
    { id:'Iso/Bi-Lateral Incline Press',     data: 'tbd' },
    { id:'Iso/Bi-Lateral Kickbacks',         data: 'tbd' },
    { id:'Modified Dips',                    data: 'tbd' },
    { id:'Modified Push-Ups',                data: 'tbd' },
    { id:'Over Under',                       data: 'tbd' },
    { id:'Overhead Triceps Extension',       data: 'tbd' },
    { id:'Pause Rep Push-Ups',               data: 'tbd' },
    { id:'Plyo Push-Ups',                    data: 'tbd' },
    { id:'Press Fly Combo',                  data: 'tbd' },
    { id:'Press Fly Combo (ball)',           data: 'tbd' },
    { id:'Prone Kickbacks',                  data: 'tbd' },
    { id:'Push-Ups',                         data: 'tbd' },
    { id:'Reverse Grip Bench Press',         data: 'tbd' },
    { id:'Supine Alternating Med Ball Throw',data: 'tbd' },
    { id:'Triceps Pushdown',                 data: 'tbd' },
    { id:'Walk Out',                         data: 'tbd' },
    { id:'Walking Push-Ups',                 data: 'tbd' },
    { id:'Wall Press',                       data: 'tbd' }
];

const ChestAndTriceps = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Exercise navigation={navigation} nextPage={'tbd'} text={item.id}></Exercise>
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