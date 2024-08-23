import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.HomeText}>Screen1</Text>
    
    </View>
    
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HomeText: {
    fontSize: 35,
    textAlign: "center",
  },
});
