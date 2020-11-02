import React from "react";
import { Text, StyleSheet, TouchableOpacity, } from "react-native";

export const SearchScreen = ({ navigation }) => {
  const title = "Search Screen";

  return (
    <>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
        <Text style={styles.text}>Details</Text>
      </TouchableOpacity>
    </>
  );
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
