import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BeginnerMainListItem from './BeginnerMainListItem';

const BeginnerMainScreen = () => {

    const[beginnerSheets, setBeginnerSheets] = useState([
        {id: 'Sheet 1', tableName: 'Week 1', excelName: 'Sheet 1 - Week 1'},
        {id: 'Sheet 2', tableName: 'Week 2', excelName: 'Sheet 2 - Week 2'},
        {id: 'Sheet 3', tableName: 'Week 3', excelName: 'Sheet 3 - Week 3'},
        {id: 'Sheet 4', tableName: 'Week 4', excelName: 'Sheet 4 - Week 4'},
        {id: 'Sheet 5', tableName: 'Week 5', excelName: 'Sheet 5 - Week 5'},
        {id: 'Sheet 6', tableName: 'Week 6', excelName: 'Sheet 6 - Week 6'},
        {id: 'Sheet 7', tableName: 'Week 7', excelName: 'Sheet 7 - Week 7'},
        {id: 'Sheet 8', tableName: 'Week 8', excelName: 'Sheet 8 - Week 8'},
    ]);

    return(
        <View style={styles.container}>
            <View style={styles.mainBar}>
                <View style={styles.mainBarBox}>
                    <Text style={styles.mainText}>Numbers Sheet Name</Text>
                </View>
                <View style={styles.mainBarBox}>
                    <Text style={styles.mainText}>Numbers Table Name</Text>
                </View>
                <View style={styles.mainBarBox}>
                    <Text style={styles.mainText}>Excel Worksheet Name</Text>
                </View>
            </View>
            <FlatList
                style={styles.list}
                data={beginnerSheets}
                renderItem={({item}) => (
                    <BeginnerMainListItem item={item}/>
                )}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    mainBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        backgroundColor: '#bbc',
    },
    mainBarBox: {
        flex: 1,
    },
    mainText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 3,
    },
})

export default BeginnerMainScreen;