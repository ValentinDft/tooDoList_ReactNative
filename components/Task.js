import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Task() {
    return (
        <View style={styles.task}>
            <Text style={{fontWeight: "bold", fontSize: 18, color: "white"}}>Je suis une tache</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
      backgroundColor: "#ff7675"
    },
  });
