import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Workout2Rows from '../Misc/Workout2Rows';

const W1CTC = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.topRow }>
                <Text style={ styles.topText }>Week 1</Text>
                <Text style={ styles.topText }>Date: </Text>
            </View>
            <Workout2Rows exName1='Dumbbell Bench Press' exSets1='3' exReps1='10' exLoad1=' ' exName2='Point and Reach' exSets2='3' exReps2='10 (Each Side)' exLoad2='Body' navigation={navigation} number='1)'/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    topText: {
        fontWeight: 'bold'
    }
});

export default W1CTC;