import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoldText from './BoldText';
import BoldUnderlineText from './BoldUnderlineText';

const ExerciseOption = ({text, nextPage, navigation}) => {
    return (
        <Text 
            style={ styles.text }
            onPress={() => navigation.navigate(nextPage)}
        >{ text }</Text>
    )
}

const ExerciseMenu = ({navigation}) => {
    return(
        <View style={ styles.container }>
            <ExerciseOption text='Warm-Up' nextPage='Tips' navigation={navigation}/>
            <ExerciseOption text='Chest and Triceps' nextPage='' navigation={navigation}/>
            <ExerciseOption text='Lower Body' nextPage='' navigation={navigation}/>
            <ExerciseOption text='Back, Shoulders, and Biceps' nextPage='' navigation={navigation}/>
            <ExerciseOption text='HIIT' nextPage='' navigation={navigation}/>
            <ExerciseOption text='Core' nextPage='' navigation={navigation}/>
            <ExerciseOption text='Post-Exercise Stretching' nextPage='' navigation={navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        justifyContent: 'space-evenly'
    },
    text: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 15,
    }
});

export default ExerciseMenu;