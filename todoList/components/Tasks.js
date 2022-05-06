import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#00C7E7',
        opacity: 0.4,
        borderRadius: 10,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: '#00C7E7',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;
