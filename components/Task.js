import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Task(props) {
    return (
        <View style={styles.item}>
            <Text style={{fontWeight: "bold", fontSize: 18, color: "white"}}>{props.titreTache}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#ff7675",
      padding: 15,
      borderRadius: 10,
      marginBottom: 20
    },
  });
