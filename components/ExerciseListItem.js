import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';

Icon.loadFont();

const ExerciseListItem = ({ item, makeFavorite, removeFavorite}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Video')}>
        <View style={styles.listItemView}>
            <Text styles={styles.listItemText}>{item.text}</Text>
            <Icon 
                name="star"
                size={20}
                color={item.favorite ? "gold" : "gray"}
                onPress={item.favorite ? () => removeFavorite(item.id, item.text) : () => makeFavorite(item.id, item.text)  }
            />
        </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        // backgroundColor: '#f4f4f4',
        borderBottomWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#bbb',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
    }
});

export default ExerciseListItem;