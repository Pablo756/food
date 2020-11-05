import React from "react";
import { Text, StyleSheet } from "react-native";

export const DetailsScreen = () => {
  return <Text style={styles.text}>Details</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
