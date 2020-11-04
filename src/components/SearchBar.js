import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchBar = ({ value, setValue, setReset, onSubmit }) => {
  return (
    <View style={styles.ct}>
      <Ionicons style={styles.icon} name="ios-search" size={36} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#bbb"
        autoCorrect={false}
        autoCapitalize={"none"}
        onChangeText={setValue}
        onFocus={setReset}
        onKeyPress={onSubmit}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    height: 42,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  icon: {
    marginHorizontal: 7,
  },
});
