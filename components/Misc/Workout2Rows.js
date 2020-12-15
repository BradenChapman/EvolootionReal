import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Workout2Rows = ({ exName1, exSets1, exReps1, exLoad1, 
        exName2, exSets2, exReps2, exLoad2, number, navigation}) => {
    return(
        <View>
            <View style={ styles.row }>
            <View style={ styles.smallBox }>
                <Text style={ styles.topText }>{ number }</Text>
            </View>
            <View style={ styles.bigBox }>
                <Text>
                    <Text style={ styles.underlineText }>{ exName1 }:</Text>
                    <Text style={ styles.text }>  Sets: { exSets1 }  </Text>
                    <Text style={ styles.text }>Reps: { exReps1 }  </Text>
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
                        <Text style={ styles.underlineText }>{ exName2 }</Text>
                        <Text style={ styles.text }>  Sets: { exSets2 }  </Text>
                        <Text style={ styles.text }>Reps: { exReps2 }  </Text>
                        <Text style={ styles.text }>Load: { exLoad2 }  </Text>
                    </Text>
                </View>
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 3
    },
    smallBox: {
        flex: 0.05
    },
    bigBox: {
        flex: 0.95,
        marginLeft: 5
    },
    topText: {
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 'bold', 
    },
    underlineText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default Workout2Rows;