import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{paddingTop: "20%", paddingHorizontal: 20}}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "white"}}>Tàche à effectuer aujourd'hui !</Text>
      </View>

      <View>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fab1a0',
  },
});
