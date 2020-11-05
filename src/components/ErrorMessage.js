import React from "react";
import { Text, StyleSheet } from "react-native";

export const ErrorMessage = ({ errorMessage }) => {
  return <Text style={styles.text}>{errorMessage}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
