import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const ResultsDetail = ({
  result: { name, image_url, rating, review_count },
}) => {
  return (
    <View style={styles.ct}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.desc}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flex: 1,
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
    width: 220,
  },
  desc: {
    fontSize: 16,
    color: "gray",
    marginVertical: 5,
  },
});
