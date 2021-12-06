import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


  const App = () => {

    const STORAGE_KEY = '@save_age'

    const[age, setAge] = useState(0)
  
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, age)
        alert('Data successfully saved')
      } catch (e) {
        alert('Failed to save the data to the storage')
      }
    }
    

    const readData = async () => {
      try {
        const userAge = await AsyncStorage.getItem(STORAGE_KEY)
    
        if (userAge !== null) {
          setAge(userAge)
        }
      } catch (e) {
        alert('Failed to fetch the data from storage')
      }
    }

    useEffect(() => {
      readData()
    }, []);

    const clearStorage = async () => {
      setAge(0)
      try {
        await AsyncStorage.clear()
        alert('Storage successfully cleared!')
      } catch (e) {
        alert('Failed to clear the async storage.')
      }
    }

    const onChangeText = userAge => setAge(userAge)

   

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> My App</Text>
        </View>
        <View style={styles.panel}>
          <Text>Enter your age here:</Text>
          <TextInput
            style={styles.input}
            value={age}
            keyboardType='numeric'
            placeholder="Enter Age"
            onChangeText={onChangeText}
          />
          <Text style={styles.text}>Your age is {age} </Text>
          <TouchableOpacity onPress={clearStorage}  style={styles.button}>
            <Text style={styles.buttonText}>Clear Storage </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
    }
  
    const styles = StyleSheet.create({
      maincontainer: {
        flex: 1
      },
      header: {
        width: '100%',
        backgroundColor: 'grey',
        padding: 20,
        alignItems: 'center'
      },
      title: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold'
      },
      container: {
        paddingTop: 40,
        alignItems: 'center'
      },
      text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: 'skyblue'
      },
      input: {
        padding: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10
      },
      button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'skyblue'
      },
      buttonText: {
        fontSize: 18,
        color: '#444'
      },
    
    })
  export default App;
 



  