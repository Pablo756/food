import React from "react";
import { Text, StyleSheet } from "react-native";

export const DetailsScreen = () => {
  const title = "Details";

  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
