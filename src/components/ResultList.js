import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ResultsDetail } from "./ResultsDetail";

export const ResultsList = ({ results, title }) => {
  return (
    <View style={styles.ct}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginTop: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
});
