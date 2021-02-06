import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Exercise from '../Misc/Exercise';

const DATA = [
    { id:'Barbell Bench Press',              data: 'CJWBq17pwHQ' },
    { id:'Barbell Incline Press',            data: 'pyg72pNuULc' },
    { id:'Bosu Ball Push-Ups',               data: '8fYyGXx2sEY' },
    { id:'Cable Fly',                        data: 'Sj_sZfbzH2w' },
    { id:'Chest Press (3 ROM)',              data: 'Br0AFUaKWCM' },
    { id:'Deep ROM Dips',                    data: 'DsMSE2oA97I' },
    { id:'Deep ROM Push-Ups',                data: 'Iiajqf5yyl4' },
    { id:'Dips',                             data: 'OJNjSX1xm9M' },
    { id:'Dumbbell Bench Press',             data: 'sSzlVrkqTNo' },
    { id:'Dumbbell Fly',                     data: 'DjvheCw9ijs' },
    { id:'Dumbbell Incline Press',           data: 'Quk5eMzYDQ4' },
    { id:'Dumbbell Incline Press (ball)',    data: 'p1HHjTeEf04' },
    { id:'Flex Band Bench Press',            data: 'PG7I0o8CNeg' },
    { id:'Flex Band Push-Ups',               data: 'UpvmACvTRT0' },
    { id:'Incline Press Fly Combo',          data: 'vVXkRqaTS7k' },
    { id:'Iso/Bi-Lateral Bench Press',       data: 'QRb3PKpDqp0' },
    { id:'Iso/Bi-Lateral Fly',               data: 'RpJepdtN1Qk' },
    { id:'Iso/Bi-Lateral Incline Press',     data: 'Dv8J7ga_Afs' },
    { id:'Iso/Bi-Lateral Kickbacks',         data: '5cRCclRgn5o' },
    { id:'Modified Dips',                    data: 'NlX8mUAbbPg' },
    { id:'Modified Push-Ups',                data: '8F4_I8IBgyM' },
    { id:'Over Under',                       data: '71-GMYifWL0' },
    { id:'Overhead Triceps Extension',       data: 'E_g7ZDfD6bU' },
    { id:'Pause Rep Push-Ups',               data: 'vwqf8QN1G2A' },
    { id:'Plyo Push-Ups',                    data: 'ewO9Hmr4vU8' },
    { id:'Press Fly Combo',                  data: 'hg8pazEBXUY' },
    { id:'Press Fly Combo (ball)',           data: 'smuEz1DT1sM' },
    { id:'Prone Kickbacks',                  data: 'dOIlCD-SSPE' },
    { id:'Push-Ups',                         data: 'tbd' },
    { id:'Reverse Grip Bench Press',         data: 'L3Ye5fozvws' },
    { id:'Supine Alternating Med Ball Throw',data: 'wqNtHAqppk0' },
    { id:'Triceps Pushdown',                 data: 'BFsSqaCSE80' },
    { id:'Walk Out',                         data: 'ShrCP1QyKoY' },
    { id:'Walking Push-Ups',                 data: 'umhQkl172uY' },
    { id:'Wall Press',                       data: 'tbd' }
];

const ChestAndTriceps = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Exercise navigation={navigation} nextPage={'Video'} text={item.id} ID={item.data}></Exercise>
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