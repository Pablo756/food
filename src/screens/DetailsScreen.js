import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

export const DetailsScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState([]);

  const getApi = async () => {
    try {
      const response = await yelp.get(`/${navigation.getParam("id")}`, {
        params: {},
      });
      setResult(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View style={styles.ct}>
      {errorMessage !== "" && <Text style={styles.err}>{errorMessage}</Text>}
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Image style={styles.img} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 160,
    width: 280,
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  err: {
    fontSize: 20,
    textAlign: "center",
  },
});
