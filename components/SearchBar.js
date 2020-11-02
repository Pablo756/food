import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchBar = ({ value, setValue, setReset }) => {
  return (
    <View style={styles.ct}>
      <Ionicons style={styles.icon} name="ios-search" size={38} color="gray" />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize={"none"}
        onChangeText={setValue}
        onFocus={setReset}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 40,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  icon: {
    marginHorizontal: 8,
  },
});
