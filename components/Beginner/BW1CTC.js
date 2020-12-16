import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Workout2Rows from '../Misc/Workout2Rows';
import WorkoutHeader from '../Misc/WorkoutHeader';
import Rest1Minute30 from '../Misc/Rest1Minute30';
import ExerciseNavButtons from '../Misc/ExerciseNavButtons';

/* TODO
1) Allow users to enter and store date for each page (see WorkoutHeader.js)
2) Change load props to allow users to enter data (see Workout2Rows.js)
*/
const W1CTC = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <WorkoutHeader weekNumber='1' />
            <Workout2Rows exName1='Dumbbell Bench Press' exSets1='3' exReps1='10' exLoad1=' ' exName2='Point and Reach' exSets2='3' exReps2='10 (Each Side)' exLoad2='Body' navigation={navigation} number='1)'/>
            <Workout2Rows exName1='Dumbbell Incline Press' exSets1='3' exReps1='10' exLoad1=' ' exName2='Pikes' exSets2='3' exReps2='10' exLoad2='Body' number='2)' navigation={navigation} />
            <Workout2Rows exName1='Modified Dips' exSets1='3' exReps1='10' exLoad1='Body' exName2='Crunch/Reverse Crunch' exSets2='3' exReps2='20' exLoad2='Body' number='3)' navigation={navigation} />
            <Workout2Rows exName1='Dumbbell Fly' exSets1='3' exReps1='10' exLoad1=' ' exName2='Superman (Bench)' exSets2='3' exReps2='10' exLoad2='Body' navigation={navigation} number='4)' />
            <Workout2Rows exName1='Prone Kickbacks' exSets1='3' exReps1='10' exLoad1=' ' exName2='Prone Leg Raise (Ball)' exSets2='3' exReps2='10' exLoad2='Body' number='5)' navigation={navigation} /> 
            <Rest1Minute30 />
            <ExerciseNavButtons navigation={navigation} backPage='ISACC Home' nextPage='Beginner Week 1 Lower Body' />
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
    topText: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default W1CTC;