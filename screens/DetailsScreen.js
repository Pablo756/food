import React from "react";
import { Text, StyleSheet } from "react-native";

export const DetailsScreen = ({ navigation }) => {
  return (
    <Text style={styles.text}>search: {navigation.getParam("value")}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
