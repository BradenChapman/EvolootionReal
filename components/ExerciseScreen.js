import React, {useState} from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ExerciseScreenHeader from './ExerciseScreenHeader';
import ExerciseListItem from './ExerciseListItem';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';

const ExerciseScreen = ({navigation}) => {
    const[exercises, setExercises] = useState([
        {id: uuidv4(), text: 'DeadLift', favorite: false},
        {id: uuidv4(), text: 'GobletSquat', favorite: false},
        {id: uuidv4(), text: 'RomanianDeadlift', favorite: false},
        {id: uuidv4(), text: 'SquatProgression', favorite: false},
    ]);    

    const[favorites, setFavorites] = useState([
        {id: uuidv4(), text: 'BackSquat', favorite: true},
    ]);

    const makeFavorite = (id, text) => {
        setExercises(prevExercises => {
            return prevExercises.filter(exercise => exercise.id != id);
        });
        setFavorites(prevFavorites => {
            return [{id, text, favorite: true}, ...prevFavorites];
        });
    };

    const removeFavorite = (id, text) => {
        setFavorites(prevFavorites => {
            return prevFavorites.filter(exercise => exercise.id != id);
        });
        setExercises(prevExercises => {
            return [{id, text, favorite: false}, ...prevExercises];
        });
    };

    return (
        <View style={styles.container}>
            <Header title='Exercise Page'/>
            <FlatList
                style={styles.exerciseList}
                data={[...favorites.sort((a,b) => a.text.localeCompare(b.text)), ...exercises.sort((a,b) => a.text.localeCompare(b.text))]}
                renderItem={({item}) => (
                    <ExerciseListItem item={item} makeFavorite={makeFavorite} removeFavorite={removeFavorite}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    exerciseList: {
    },
});

export default ExerciseScreen;