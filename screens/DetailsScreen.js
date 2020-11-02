import React from "react";
import { Text, StyleSheet } from "react-native";

export const DetailsScreen = (props) => {
  const value = props.navigation.state.params.value;

  return <Text style={styles.text}>search: {value}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
