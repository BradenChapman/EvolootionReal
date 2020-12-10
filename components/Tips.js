import React from 'react';
import {Text, View, StyleSheet, FLatList, SafeAreaView, StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const DATA = [
    {
        id: '1.',
        title: 'Progression: ',
        data: 'The first and most important tip I want to advise is progression. Always remember that you will not be the same as when you started. If a routine is challenging at one point and you don’t complete it… You did not fail! You will progress and get better. Strength and Conditioning isn’t a one-size-fits-all modality. Everyone is going to be entering at different levels. The only thing that matters is that you as the individual get better. Continue adherence to your training and you will Evolve!',
    },
    {
        id: '2.',
        title: 'Breathing Techniques I: ',
        data: 'When lifting, proper breathing is essential. The simple method of breathing is to inhale upon lifting and to exhale upon exertion. The advanced way of breathing is called a Valsalva Maneuver, which is a breath hold against a closed glottis. This technique is performed when heavier loads are applied to the system and the lifter needs to pressurize the system to maintain strength. In order to do this, you take a breath in and brace, creating pressure from the diaphragm to the pelvic floor. This pressure is sustained by a strong trunk, and the fluid pressure gives more support to lumbar region.'
    },
    {
        id: '3.',
        title: 'Breathing Techniques II: ',
        data: 'Once applied, you hold your breath to maintain this pressure and don’t expel until you get past the sticking point. Do not hold your breath through the entire movement! Again, this is a more advanced technique for breathing and shouldn’t be performed without practice or a professional guiding you through this technique as you lift.'
    },
    {
        id: '4.',
        title: 'Working to Failure: ',
        data: 'For a lot of people, failure has a negative connotation. In this case it’s the exact opposite. Working to failure is basically challenging yourself to be on your edge when working with a particular load and volume. When choosing a load (weight) you want to make sure that load is significant enough that when you reach the prescribed volume (reps) you couldn’t do anymore. You may also fail to achieve the volume in the second or third set. This is not a bad thing! Your body will adapt as you progress, and that same load will become easier… That’s how you know your conditioning has improved. When this happens you need to increase the load to continue to challenge the system.',
    },
    {
        id: '5.',
        title: '1RM (1 Rep Max): ',
        data: 'The 1RM is lifting the maximum amount of weight 1 time. This is performed with compound lifts like the Bench Press, Squat, and Deadlift. Since this is a maximum weight, having a spotter would be ideal. Also, the use of protective equipment like a weight belt would be good if you don’t feel comfortable enough or lack the trunk strength to support the system when lifting.',
    },
    {
        id: '6.',
        title: 'Alternative Exercises: ',
        data: 'If there is any exercise that you cannot perform due to any physical limitations, don’t hesitate to refer to the exercise menu to find a substitute (I.e., Leg Press instead of Back Squat, or Sumo Deadlift instead of Deadlift)',
    },
    {
        id: '7.',
        title: 'Practice: ',
        data: 'If you’re a new lifter or an advanced lifter who may not be familiar with performing a particular exercise, reviewing the exercise or exercises the night before can be helpful. Think of it as taking mental reps!',
    },
    {
        id: '8.',
        title: 'Exercise Order: ',
        data: 'If you decide to choose exercises to perform outside of the set programs provided, always remember to start with your Compound Lifts (i.e., Bench Press or Squat), then your Auxiliary Lifts (i.e., Biceps Curls or Leg Extensions), and finally your Core exercises.',
    },

];

const Tip = ({id, title, data}) => (
    <View style={ styles.row }>
        <View style={ styles.bullet }>
            <Text style={ styles.boldText }>{id}</Text>
        </View>
        <View style={ styles.bulletText }>
            <Text>
                <Text style={ styles.boldText }>{title}</Text>
                <Text style={ styles.normalText }>{data}</Text>
            </Text>
        </View>
    </View>
);

const Tips = () => {
    const renderItem = ({item}) => (
        <Tip id={item.id} title={item.title} data={item.data} />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
    },
    bullet: {
      flex: 0.05
    },
    bulletText: {
      flex: 0.95
    },
    boldText: {
        fontWeight: 'bold',
    },
    normalText: {
    },
  });

export default Tips;

