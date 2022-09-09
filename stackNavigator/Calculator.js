import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Calculator({navigation}) {
    const [number1, setNumber1] = useState(null);
    const [number2, setNumber2] = useState(null);
    const [tulos, setTulos] = useState(null);
    const [list, setList] = useState([]);
  
    const laskeYhteen = () => {
      const tulos = Number(number1)+Number(number2);
      setTulos(tulos);
      const history = number1 + " + " + number2 + " = " + tulos;
      setList([...list, {key: history}]);
      setNumber1(null);
      setNumber2(null);
    };
  
    const laskeErikseen = () => { 
      const tulos = Number(number1)-Number(number2);
      setTulos(tulos);
      const history = number1 + " - " + number2 + " = " + tulos;
      setList([...list, {key: history}]);
      setNumber1(null);
      setNumber2(null);
    };

    return (
    <View style={styles.container}>
        <Text>Result: {tulos}</Text>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1} />
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2} />
  
        <View style={{ flexDirection: 'row', marginTop: 10}}>
            <View style={{ marginRight: 10}}>
                <Button onPress={laskeYhteen} title="+" />
            </View>
            <View style={{ marginRight: 10}}>
                <Button onPress={laskeErikseen} title="-" />
            </View>
            <View>
                <Button title="History" onPress={() => navigation.navigate('History', {list: list})} />
            </View>
        </View>

            <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10%'
    },
    input: {
      width:200, 
      borderColor: 'gray', 
      borderWidth: 1,
      margin: 5
    }
  });