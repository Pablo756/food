import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import useResults from "../hooks/useResults";

import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "../components/ResultList";
import { ErrorMessage } from "../components/ErrorMessage";

export const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

  return (
    <View style={styles.ct}>
      <SearchBar
        setValue={setValue}
        onSubmit={() => searchApi(value)}
        value={value}
      />
      {errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : null}
      <ScrollView>
        {filterResultsByPrice("$").length > 0 && (
          <ResultsList
            navigation={navigation}
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
        )}
        {filterResultsByPrice("$$").length > 0 && (
          <ResultsList
            navigation={navigation}
            results={filterResultsByPrice("$$")}
            title="Bit Pricier"
          />
        )}
        {filterResultsByPrice("$$$").length > 0 && (
          <ResultsList
            navigation={navigation}
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ct: {
    flex: 1,
  },
});
