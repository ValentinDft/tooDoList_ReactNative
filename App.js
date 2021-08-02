import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={{paddingTop: "15%", paddingHorizontal: 15}}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "white"}}>Tàche à effectuer aujourd'hui !</Text>
      </View>

      <View style={{margin: 20}}>
        <Task title="Je suis une tache"/>
        <Task title="Je suis une autre tache"/>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{position: "absolute", bottom: 40, width: "100%", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}
      >
        <TextInput placeholder="Nouvelle tache..." style={{backgroundColor: "white", padding: 15, borderRadius: 50, width: "70%"}}/>

        <TouchableOpacity style={{backgroundColor: "white", height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 22, fontWeight: "bold"}}>+</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fab1a0',
  },
});
