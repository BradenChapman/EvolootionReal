import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


/* TODO
1) Make it so that users can enter and store their loads
2) Add props that allow user to pass the video page for the exercise
*/
const Workout2Rows = ({ exName1, exSets1, exReps1, exLoad1, 
        exName2, exSets2, exReps2, exLoad2,
        exName3, exSets3, exReps3, exLoad3,
        number, navigation }) => {
    return(
        <View style={ styles.set }>
            <View style={ styles.row }>
            <View style={ styles.smallBox }>
                <Text style={ styles.topText }>{ number }</Text>
            </View>
            <View style={ styles.bigBox }>
                <Text>
                    <Text style={ styles.underlineText }>{ exName1 }:</Text>
                </Text>
                <Text>
                    <Text style={ styles.text }>Sets: { exSets1 }      </Text>
                    <Text style={ styles.text }>Reps: { exReps1 }      </Text>
                    <Text style={ styles.text }>Load: { exLoad1 }  </Text>
                </Text>
            </View>
            </View>
            <View style={ styles.row }>
                <View style={ styles.smallBox }>
                    <Text style={ styles.text }></Text>
                </View>
                <View style={ styles.bigBox }>
                    <Text>
                        <Text style={ styles.underlineText }>{ exName2 }:</Text>
                    </Text>
                    <Text>
                        <Text style={ styles.text }>Sets: { exSets2 }      </Text>
                        <Text style={ styles.text }>Reps: { exReps2 }      </Text>
                        <Text style={ styles.text }>Load: { exLoad2 }  </Text>
                    </Text>
                </View>
            </View>
            <View style={ styles.row }>
                <View style={ styles.smallBox }>
                    <Text style={ styles.text }></Text>
                </View>
                <View style={ styles.bigBox }>
                    <Text>
                        <Text style={ styles.underlineText }>{ exName3 }:</Text>
                    </Text>
                    <Text>
                        <Text style={ styles.text }>Sets: { exSets3 }      </Text>
                        <Text style={ styles.text }>Reps: { exReps3 }      </Text>
                        <Text style={ styles.text }>Load: { exLoad3 }  </Text>
                    </Text>
                </View>
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
    set: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 3
    },
    smallBox: {
        flex: 0.05
    },
    bigBox: {
        flex: 0.90,
        marginLeft: 5
    },
    topText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    text: {
        fontWeight: 'bold', 
        fontSize: 15
    },
    underlineText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 15
    }
});

export default Workout2Rows;