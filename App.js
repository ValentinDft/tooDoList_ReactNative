import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [tache, setTache] = useState();
  const [listeTache, setListeTache] = useState([])

  let clickAdd = () => {
    setListeTache([...listeTache, tache]);
    setTache(null);

    // Close keyboard
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>

      <View style={{paddingTop: "15%", paddingHorizontal: 15}}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "white"}}>Tàche à effectuer aujourd'hui !</Text>
      </View>

      <View style={{margin: 20}}>
        {listeTache.length > 0 ? listeTache.map((tache, i) => {
          return(
            <Task key={i} titreTache={tache}/>
          )
        }) : <Text style={{fontSize: 18, textAlign: "center", paddingVertical: "50%"}}>Aucune tache</Text>}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{position: "absolute", bottom: 40, width: "100%", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}
      >
        <TextInput 
          placeholder="Nouvelle tache..." 
          style={{backgroundColor: "white", padding: 15, borderRadius: 50, width: "70%"}}
          onChangeText={text => setTache(text)}
          value={tache}
        />

        <TouchableOpacity 
          style={{backgroundColor: "white", height: 40, width: 40, borderRadius: 100, justifyContent: "center", alignItems: "center"}}
          onPress={clickAdd}
        >
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
