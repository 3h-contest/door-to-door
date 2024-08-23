import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {NaverMapView} from "@mj-studio/react-native-naver-map";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.HomeText}>Screen1</Text>
      <NaverMapView style={{flex: 1}} />
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
