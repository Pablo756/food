import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.ct}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.desc}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    marginRight: 10,
  },
  image: {
    height: 150,
    width: 220,
    marginVertical: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    fontSize: 16,
    color: "gray",
    marginVertical: 5,
  },
});
