import React from "react";
import { StyleSheet, TouchableOpacity, Text, } from "react-native";

export const Button = ({ title, onPress }) => {

  return <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    backgroundColor: "#699490",
    borderColor: "#000",
    borderWidth: 1,
  },
});
