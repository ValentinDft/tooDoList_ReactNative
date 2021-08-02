import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Task(props) {

    let clickDelete = index => {
        props.clickDelete(index);
    }

    return (
        <View style={styles.item}>
            <Text style={{fontWeight: "bold", fontSize: 18, color: "white"}}>{props.titreTache}</Text>
            
            <TouchableOpacity 
                style={{backgroundColor: "white", height: 30, width: 30, borderRadius: 100, justifyContent: "center", alignItems: "center"}}
                onPress={() => clickDelete(props.position)}
            >
                <Text style={{fontSize: 18, fontWeight: "bold"}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#ff7675",
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
  });
