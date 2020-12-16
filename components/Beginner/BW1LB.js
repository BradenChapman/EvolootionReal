import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Workout2Rows from '../Misc/Workout2Rows';
import Workout3Rows from '../Misc/Workout3Rows';
import WorkoutHeader from '../Misc/WorkoutHeader';
import ExerciseNavButtons from '../Misc/ExerciseNavButtons';
import Rest1Minute30 from '../Misc/Rest1Minute30';
import Rest1Minute from '../Misc/Rest1Minute';


const W1LB = ({ navigation }) => {
    return (
        <View style={ styles.container} >
            <WorkoutHeader weekNumber='1' />
            <Workout2Rows exName1='Squat Progression' exSets1='3' exReps1='10' exLoad1=' ' exName2='Leg Extension' exSets2='3' exReps2='10' exLoad2=' ' number='1)' navigation={navigation}/>
            <Workout2Rows exName1='Dumbbell Romanian Deadlift' exSets1='3' exReps1='10' exLoad1=' ' exName2='Leg Curl' exSets2='3' exReps2='10' exLoad2=' ' number='2)' navigation={navigation}/>
            <Workout3Rows exName1='Hip Abduction (Band)' exSets1='3' exReps1='10' exLoad1=' ' exName2='Hip Abduction' exSets2='3' exReps2='20' exLoad2=' ' exName3='One Leg Calf Raise' exSets3='3' exReps3='15' exLoad3='Body' number='3)' navigation={navigation} />
            <Rest1Minute30 />
            <View>
                <Text style={styles.text}>Core</Text>
            </View>
            <Workout2Rows exName1='Crunches' exSets1='3' exReps1='30' exLoad1='Body' exName2='Oblique Crunches' exSets2='3' exReps2='15' exLoad2='Body' number='4)' navigation={navigation} />
            <Rest1Minute />
            <ExerciseNavButtons navigation={navigation} backPage='Beginner Week 1 Chest, Triceps, and Core' nextPage='' />
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
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 30,
        marginBottom: 20
    },
});

export default W1LB;