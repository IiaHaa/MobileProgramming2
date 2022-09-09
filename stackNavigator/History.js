import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function History({ route, navigation }) {
    const { list } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.list}>History</Text>
        
            <FlatList
                data={list}
                renderItem={ ({item}) => <Text>{item.key}</Text> }
                keyExtractor={ (item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: '10%',
        marginBottom: 5
    }
  });