import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 5,
        paddingRight: 20,
        marginBottom: 5,
        backgroundColor: '#eee',
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "rgba(98, 173, 124, 1)",
        borderRadius: 5
    }, 
    placeImage: {
        marginRight: 10,
        height: 30,
        width: 30
    }
})

export default ListItem;